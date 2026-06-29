import Link from "next/link";
import {
  Globe,
  PlayCircle,
  Boxes,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-white/30 to-cyan-100/40 blur-3xl"></div>

      <div
        className="
        rounded-t-[40px]
        border-t
        border-white/30

        bg-white/55
        backdrop-blur-2xl

        shadow-[0_-10px_40px_rgba(15,23,42,.08)]
        "
      >
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Logo */}

            <div>

              <Link
                href="/"
                className="
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                bg-clip-text
                text-3xl
                font-extrabold
                text-transparent
                "
              >
                GadgetHub
              </Link>

              <p className="mt-5 leading-7 text-slate-600">
                Premium technology marketplace for modern digital life.
                Discover cutting-edge gadgets with trusted quality and
                worldwide delivery.
              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-slate-900">
                Quick Links
              </h3>

              <ul className="space-y-4">

                <li>
                  <Link
                    href="/"
                    className="transition hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/items"
                    className="transition hover:text-blue-600"
                  >
                    Browse Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="transition hover:text-blue-600"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-slate-900">
                Contact
              </h3>

              <ul className="space-y-5 text-slate-600">

                <li className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={18} />
                  support@gadgethub.tech
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={18} />
                  +1 (888) GADGET-H
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={18} />
                  Silicon Valley, CA
                </li>

              </ul>

            </div>

            {/* Social */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-slate-900">
                Follow Us
              </h3>

              <div className="flex gap-4">

                <Link
                  href="#"
                  className="
                  rounded-2xl

                  border
                  border-white/30

                  bg-white/40

                  p-3

                  backdrop-blur-xl

                  transition

                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:text-white
                  "
                >
                  <Globe size={20} />
                </Link>

                <Link
                  href="#"
                  className="
                  rounded-2xl

                  border
                  border-white/30

                  bg-white/40

                  p-3

                  backdrop-blur-xl

                  transition

                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:text-white
                  "
                >
                  <PlayCircle size={20} />
                </Link>

                <Link
                  href="#"
                  className="
                  rounded-2xl

                  border
                  border-white/30

                  bg-white/40

                  p-3

                  backdrop-blur-xl

                  transition

                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:text-white
                  "
                >
                  <Boxes size={20} />
                </Link>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-10 border-t border-slate-200/70"></div>

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} GadgetHub. All rights reserved.
            </p>

            <div className="flex gap-6">

              <Link
                href="/privacy"
                className="transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-blue-600"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;