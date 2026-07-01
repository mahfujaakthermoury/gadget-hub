import ProductDetails from '@/components/items/ProductDetails';
import { allProducts } from "@/data/allProducts";

import React from 'react';

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <ProductDetails product={product} />
  );
}