"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10 space-y-8"
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>

            New M4 Generation Available Now
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            Discover the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Latest Tech
            </span>{" "}
            Products
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
            }}
            className="max-w-xl text-lg leading-8 text-slate-600"
          >
            Elevate your digital lifestyle with high-precision engineering.
            From powerful workstations to immersive audio, find the gadgets
            that define your future.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
            }}
            className="flex flex-wrap gap-5"
          >
            <button
              className="
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
              hover:shadow-blue-400/30
              "
            >
              Browse Products
            </button>

            <button
              className="
              rounded-2xl
              border
              border-slate-300

              bg-white/50
              px-8
              py-4

              font-semibold

              backdrop-blur-xl

              transition-all
              duration-300

              hover:bg-white
              hover:shadow-lg
              "
            >
              View Deals
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            rotate: 0,
            scale: 1.03,
          }}
          className="relative"
        >
          {/* Blur Effect */}

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-[100px]" />

          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-[100px]" />

          {/* Floating Card */}

          <div
            className="
            relative
            z-10

            overflow-hidden

            rounded-[2rem]

            border
            border-white/30

            bg-white/30

            backdrop-blur-xl

            shadow-2xl
            "
          >
            <Image
              src="/assets/hero-img.png"
              alt="Premium Workstation"
              width={700}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;