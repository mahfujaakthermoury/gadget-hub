"use client";

import { motion } from "framer-motion";
import {
  Truck,
  BadgeCheck,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Next-day shipping on all premium hardware orders across the globe.",
    icon: Truck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Trusted Quality",
    description:
      "Every gadget undergoes rigorous 12-point precision testing before shipping.",
    icon: BadgeCheck,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Best Prices",
    description:
      "Price match guarantee on all flagship laptops and accessories.",
    icon: BadgeDollarSign,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Secure Shopping",
    description:
      "End-to-end encrypted transactions for absolute peace of mind.",
    icon: ShieldCheck,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

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

export default function WhyChoice() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Why Choose GadgetHub
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Excellence in every interaction
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="
                group

                rounded-3xl

                border
                border-white/30

                bg-white/50

                p-8

                backdrop-blur-xl

                shadow-lg
                shadow-slate-200/30

                transition-all
                duration-300

                hover:border-blue-200
                hover:shadow-2xl
                hover:bg-blue-500/10
                "
              >
                {/* Icon */}

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg} transition duration-300 group-hover:scale-110`}
                >
                  <Icon
                    className={feature.color}
                    size={30}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}