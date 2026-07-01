"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Items",
    href: "/items",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4">

          <nav
            className="
              flex
              h-16
              items-center
              justify-between

              rounded-2xl

              border
              border-white/30

              bg-white/55

              backdrop-blur-2xl

              shadow-xl
              shadow-slate-200/30

              px-6
              py-10

              transition-all
              duration-300
            "
          >
            {/* Left */}
            <div className="flex items-center gap-3">

              {/* Mobile Menu */}
              <button
                onClick={() => setOpen(true)}
                className="
                rounded-xl
                p-2
                transition
                hover:bg-white/60
                md:hidden
                "
              >
                <Menu size={24} />
              </button>

              {/* Logo */}
              <Link
                href="/"
                className="
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                bg-clip-text
                text-2xl
                font-extrabold
                tracking-tight
                text-transparent
                "
              >
                GadgetHub
              </Link>
            </div>

            {/* Desktop Navigation */}

            <ul className="hidden items-center gap-10 md:flex">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                    relative

                    font-medium
                    text-slate-700

                    transition

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-blue-600
                    after:transition-all

                    hover:text-blue-600
                    hover:after:w-full
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right */}

            <div className="flex items-center gap-3">

              <button
                className="
                hidden
                rounded-full
                border
                border-white/30
                bg-white/40
                p-2
                backdrop-blur-xl
                transition
                hover:bg-blue-50
                md:flex
                "
              >
                <Search size={20} />
              </button>

              <button
                className="
                hidden
                rounded-full
                border
                border-white/30
                bg-white/40
                p-2
                backdrop-blur-xl
                transition
                hover:bg-blue-50
                md:flex
                "
              >
                <ShoppingCart size={20} />
              </button>

              <Image
                src="https://i.pravatar.cc/100"
                alt="Profile"
                width={42}
                height={42}
                className="
                rounded-full
                border-2
                border-white
                object-cover

                shadow-md

                transition
                duration-300

                hover:scale-105
                hover:ring-2
                hover:ring-blue-500
                "
              />
              <Link
                href="/login"
                className="
                relative

                    font-medium
                    text-slate-700

                    transition

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-blue-600
                    after:transition-all

                    hover:text-blue-600
                    hover:after:w-full
                "
              >
                Login
              </Link>
            </div>

          </nav>
        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40

          bg-black/30
          backdrop-blur-sm

          transition-opacity
          duration-300

          md:hidden

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50

          h-screen
          w-72

          border-r
          border-white/20

          bg-white/60

          backdrop-blur-3xl

          shadow-2xl

          transition-transform
          duration-300

          md:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}

        <div className="flex items-center justify-between border-b border-slate-200/50 p-6">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            bg-clip-text
            text-2xl
            font-bold
            text-transparent
            "
          >
            GadgetHub
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 hover:bg-white/70"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}

        <ul className="space-y-3 p-6">

          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                block

                rounded-xl

                px-4
                py-3

                font-medium

                text-slate-700

                transition

                hover:bg-white/70
                hover:text-blue-600
                "
              >
                {item.name}
              </Link>
            </li>
          ))}

          <div className="my-5 border-t border-slate-200"></div>

          <li>
            <Link
              href="/login"
              className="
              block
              rounded-xl
              px-4
              py-3

              text-slate-700

              hover:bg-white/70
              "
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="
              block

              rounded-xl

              bg-blue-600

              py-3

              text-center
              font-semibold
              text-white

              transition

              hover:bg-blue-700
              "
            >
              Register
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
