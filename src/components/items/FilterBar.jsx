"use client";
import { motion } from "framer-motion";

const FilterBar = ({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  priceRanges,
}) => {


    const categories = [
        "All",
        "Laptop",
        "Gaming",
        "Accessories",
    ];

    return (
        <div>
            {/* <!-- FilterBar --> */}

            <section className="sticky top-20 z-40 my-12 rounded-3xl border border-slate-200 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-xl">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* Categories */}

                    <div className="flex flex-wrap gap-3">

                        {categories.map((category) => (

                            <motion.button
                                key={category}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ y: -2 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300

            ${selectedCategory === category
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                                        : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                                    }

          `}
                            >
                                {category}
                            </motion.button>

                        ))}

                    </div>

                    {/* Price */}

                    <div className="flex flex-wrap items-center gap-3">

                        <span className="mr-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Price
                        </span>

                        {priceRanges.map((price) => (

                            <motion.button
                                key={price.label}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ y: -2 }}
                                onClick={() => setSelectedPrice(price)}
                                className={`rounded-xl border px-5 py-2 text-sm font-medium transition-all duration-300

          ${selectedPrice.label === price.label
                                        ? "border-blue-600 bg-blue-600 text-white"
                                        : "border-slate-300 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
                                    }

          `}
                            >
                                {price.label}
                            </motion.button>

                        ))}

                    </div>

                </div>

            </section>
        </div>
    );
};

export default FilterBar;