"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    
const router = useRouter();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition"
        >
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    {product.category}
                </span>
            </div>

            <div
                className="p-6 cursor-pointer"
                onClick={() => router.push(`/items/${product.id}`)}
            >
                <p className="text-sm text-slate-500">
                    {product.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold transition group-hover:text-blue-600">
                    {product.name}
                </h3>

                <p className="mt-3 line-clamp-2 text-gray-600">
                    {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                    </span>

                    <button className="rounded-full bg-blue-100 p-3 transition hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}