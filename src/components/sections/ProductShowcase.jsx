import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import LazyImage from '../ui/LazyImage';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProductShowcase() {
  const products = siteConfig.products;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Signatures</h3>
                <p className="text-gray-600 max-w-xl">Handcrafted daily using the finest ingredients. Taste the difference of true artisan baking.</p>
            </div>
            <Button href="/shop" variant="outline" size="sm">View All Products</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((product) => (
                <div key={product.id} className="group flex flex-col gap-3">
                    {/* Image Card */}
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                        <LazyImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {product.isNew && <Badge className="bg-green-600">New</Badge>}
                            {product.isBestSeller && <Badge className="bg-amber-500">Best Seller</Badge>}
                        </div>
                        {/* Quick Add Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <button className="w-full bg-white text-black font-bold uppercase text-[10px] py-3 rounded-lg shadow-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                                <ShoppingBag size={14} /> Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="text-center md:text-left">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                            {product.category}
                        </span>
                        <h4 className="font-heading font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">
                            {product.name}
                        </h4>
                        <span className="font-body font-bold text-primary">
                            {product.price}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
