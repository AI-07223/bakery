// src/components/ContactForms.jsx
import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';

const GenericForm = ({ title, fields, type }) => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Add metadata
    data.formType = type;
    data.timestamp = new Date().toISOString();

    try {
        if (!siteConfig.integrations.googleSheetWebhookUrl) {
            throw new Error("Webhook URL not configured");
        }

        await fetch(siteConfig.integrations.googleSheetWebhookUrl, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script Webhooks usually
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Since no-cors returns opaque response, we assume success if no network error
        setStatus('success');
        e.target.reset();

    } catch (error) {
        console.error("Submission error:", error);
        setStatus('error');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>

        {status === 'success' ? (
            <div className="text-center py-12 text-green-600">
                <p className="text-xl font-bold mb-2">Thank you!</p>
                <p>We have received your message.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline text-gray-500">Send another</button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                {fields.map((field) => (
                    <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                        {field.type === 'textarea' ? (
                            <textarea
                                name={field.name}
                                required={field.required}
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                required={field.required}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                    {status === 'submitting' ? 'Sending...' : 'Submit'}
                </button>

                {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
            </form>
        )}
    </div>
  );
};

export function CustomOrder() {
    if (!siteConfig.features.enableCustomOrder) return null;

    return (
        <Section id="custom-order" className="bg-primary/5 rounded-3xl my-8">
            <SectionTitle>Custom Orders</SectionTitle>
            <GenericForm
                type="custom_order"
                title="Build Your Dream Cake"
                fields={[
                    { name: "name", label: "Your Name", type: "text", required: true },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "date", label: "Date Needed", type: "date", required: true },
                    { name: "details", label: "Describe your dream cake", type: "textarea", required: true },
                ]}
            />
        </Section>
    );
}

export function Contact() {
    if (!siteConfig.features.enableContactForm) return null;

    return (
        <Section id="contact">
            <SectionTitle>Contact Us</SectionTitle>
            <GenericForm
                type="contact"
                title="Get in Touch"
                fields={[
                    { name: "name", label: "Name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "message", label: "Message", type: "textarea", required: true },
                ]}
            />
        </Section>
    );
}
