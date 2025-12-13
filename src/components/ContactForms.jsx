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
    data.formType = type;
    data.timestamp = new Date().toISOString();

    try {
        if (!siteConfig.integrations.googleSheetWebhookUrl) {
            // Simulate success for demo
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.warn("Webhook URL not configured. Simulating success.");
        } else {
             await fetch(siteConfig.integrations.googleSheetWebhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        }
        setStatus('success');
        e.target.reset();
    } catch (error) {
        console.error("Submission error:", error);
        setStatus('error');
    }
  };

  return (
    <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-2xl mx-auto border border-gray-100">
        <h3 className="text-3xl font-heading font-bold mb-8 text-center">{title}</h3>

        {status === 'success' ? (
            <div className="text-center py-12 text-green-700">
                <p className="text-2xl font-heading italic mb-4">Merci!</p>
                <p className="font-light">We have received your inquiry and will be in touch shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-xs uppercase tracking-widest underline opacity-60 hover:opacity-100">Send another</button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
                {fields.map((field) => (
                    <div key={field.name} className="relative group">
                         <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-focus-within:text-primary transition-colors">
                            {field.label} {field.required && '*'}
                         </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                name={field.name}
                                required={field.required}
                                rows={4}
                                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-4 transition-colors resize-none font-light"
                                placeholder=" "
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                required={field.required}
                                className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-4 transition-colors font-light"
                                placeholder=" "
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-foreground text-white font-bold text-sm uppercase tracking-[0.2em] py-4 rounded hover:bg-primary transition-colors disabled:opacity-50 shadow-lg mt-4"
                >
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
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
        <Section id="custom-order" className="my-16">
            <SectionTitle>Bespoke Creations</SectionTitle>
            <GenericForm
                type="custom_order"
                title="Design Your Dream"
                fields={[
                    { name: "name", label: "Full Name", type: "text", required: true },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "date", label: "Event Date", type: "date", required: true },
                    { name: "details", label: "Vision & Details", type: "textarea", required: true },
                ]}
            />
        </Section>
    );
}

export function Contact() {
    if (!siteConfig.features.enableContactForm) return null;

    return (
        <Section id="contact" className="my-16">
            <SectionTitle>Get in Touch</SectionTitle>
            <GenericForm
                type="contact"
                title="Contact Us"
                fields={[
                    { name: "name", label: "Name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "message", label: "Message", type: "textarea", required: true },
                ]}
            />
        </Section>
    );
}
