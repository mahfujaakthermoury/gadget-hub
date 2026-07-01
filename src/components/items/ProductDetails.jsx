import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";

export default function ProductDetails({ product }) {
  return (
    <section className="max-w-7xl mx-auto py-20">

      <div className="grid lg:grid-cols-2 gap-16 pt-30">

        {/* Product Image */}

                <div className="relative h-[500px] rounded-3xl overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        {/* Product Information */}

        <div>

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            {product.category}
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            {product.name}
          </h1>

          {/* Rating */}

          <div className="mt-5 flex items-center gap-2">

            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-gray-500">
              (128 Reviews)
            </span>

          </div>

          {/* Price */}

          <h2 className="mt-6 text-4xl font-bold text-blue-600">
            ${product.price}
          </h2>

          {/* Stock */}

          <p className="mt-3 font-medium text-green-600">
            ✔ In Stock
          </p>

          {/* Description */}

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Quantity */}

          <div className="mt-10 flex items-center gap-5">

            <div className="flex items-center rounded-xl border">

              <button className="px-5 py-3 text-xl">
                -
              </button>

              <span className="px-6">1</span>

              <button className="px-5 py-3 text-xl">
                +
              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button className="rounded-xl border border-slate-300 p-4 transition hover:bg-red-50">
              <Heart />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}