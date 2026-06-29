"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import reviews from "@/data/reviews";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function CustomerReviews() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900">
            Customer Reviews
          </h2>

          <p className="mt-3 text-slate-500">
            What our tech community says
          </p>
        </motion.div>

        {/* Reviews */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}

              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={
                      index < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}
              </div>

              {/* Review */}

              <p className="italic leading-7 text-slate-600">
                {review.review}
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {review.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {review.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}