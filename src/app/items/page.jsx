"use client";
import { useState } from "react";
import { allProducts } from "@/data/allProducts";

import SearchBar from "@/components/items/SearchBar";
import FilterBar from "@/components/items/FilterBar";
import Items from "@/components/items/Items";


export default function ItemsPage() {
      const priceRanges = [
        { label: "All", min: 0, max: Infinity },
        { label: "Below $500", min: 0, max: 500 },
        { label: "$500 - $1000", min: 500, max: 1000 },
        { label: "Above $1000", min: 1000, max: Infinity },
    ];

  const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);

const filteredProducts = allProducts.filter((product) => {
        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const priceMatch =
            product.price >= selectedPrice.min &&
            product.price <= selectedPrice.max;

        return categoryMatch && priceMatch;
    });

  return (
    
    <main className="mx-auto max-w-7xl px-4 py-24 lg:px-8">

      <SearchBar />
      <FilterBar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      priceRanges={priceRanges}
    />
      <Items products={filteredProducts}/>
    </main>
  );
}