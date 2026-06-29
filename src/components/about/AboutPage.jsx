"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { div } from "framer-motion/client";
import { ArrowRight, Eye, Rocket } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="space-y-20 bg-[#f9f9ff] py-12 px-6">

            <section className="relative overflow-hidden py-24 lg:min-h-[620px] lg:py-32">
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

                {/* Decorative Blur */}
                <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
                    {/* ================= Left Content ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="space-y-8"
                    >
                        {/* Badge */}

                        <motion.span
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700"
                        >
                            Our Story
                        </motion.span>

                        {/* Heading */}

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl"
                        >
                            Who We Are
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="max-w-xl text-lg leading-8 text-slate-600"
                        >
                            At <span className="font-semibold">GadgetHub</span>, we bridge the
                            gap between human potential and cutting-edge technology. We are a
                            team of curators, engineers, and tech enthusiasts dedicated to
                            delivering precision-engineered gadgets that redefine the modern
                            digital lifestyle.
                        </motion.p>

                        {/* Buttons */}

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/products">
                                <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-300/40">
                                    Explore Catalog
                                </button>
                            </Link>

                            <Link href="/about">
                                <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100">
                                    Our Process
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ================= Right Image ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: "easeOut",
                        }}
                        className="relative hidden lg:block"
                    >
                        {/* Image */}

                        <motion.div
                            whileHover={{
                                rotate: 0,
                                scale: 1.02,
                            }}
                            initial={{
                                rotate: 3,
                            }}
                            className="relative h-[520px] overflow-hidden rounded-[32px] shadow-2xl"
                        >
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHCETa2V60_EBZIs2fL8gLiPTLw2TzzhutfFo3vwcnDVfXrzr22llw5jlbz1mENmKK2kXQC9AmMRBlUIaWlEdBPI6UNcr27nOD-K_9ljgjzLvI4QuQT1NuzC4c6imC9B-hge7efqJi8w0wTTiIazFND6FfehaHc30OvPfNZg4N8EznKoAY-lMGCCw2BvVMLatdQyKzcvWZmE5hiIppkwaI9R9OTfK3Tfg8E0Z14tBb2hFp4IxT_QB7N7bqx2lBjVAstHFdD-rlowDU"
                                alt="Modern GadgetHub showroom"
                                fill
                                priority
                                className="object-cover"
                            />

                            <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/20" />
                        </motion.div>

                        {/* Floating Glass Card */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.8,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="absolute -bottom-8 -left-8 max-w-[220px] rounded-2xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-xl"
                        >
                            <h3 className="text-4xl font-bold text-blue-600">150K+</h3>

                            <p className="mt-2 text-sm font-medium text-slate-600">
                                Active Users Trust Us
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 1. Mission & Vision (Bento Grid) */}
            <section className="space-y-10">
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-bold text-[#0f172a]">Our Driving Force</h2>
                    <p className="text-xl text-gray-500">Built on the foundation of technical excellence.</p>
                </div>

                <div className="flex gap-8 mt-5 pt-5">
                    {/* Mission Card */}
                    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center text-[#2563eb]">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a]">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower individuals by providing seamless access to the world most advanced
                            and reliable technology, ensuring every gadget delivered is a masterpiece of
                            precision engineering and functional beauty.
                        </p>
                        <button className="flex items-center gap-2 text-[#2563eb] font-semibold text-sm group">
                            Learn about our quality standards
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Vision Card */}
                    <div
                        style={{ backgroundColor: "#0e46c0" }}
                        className="rounded-3xl p-8 text-white"
                    >
                        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Eye size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Our Vision</h3>
                        <p className="text-blue-50 leading-relaxed mt-5">
                            To become the global gold standard for tech commerce, where Innovation meets integrity,
                            and every customer experience the future today.
                        </p>
                    </div>
                </div>
            </section>
        </div>  
    );
};

export default AboutPage;