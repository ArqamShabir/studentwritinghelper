import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-ink-900 text-white">
      <footer className="mx-auto max-w-[1440px] px-6 py-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sand-100">
              Student Writing Helper
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Build smarter with calculators.
            </h2>
            <p className="mt-3 text-sm text-sand-100">
              A growing library of SEO-friendly calculators for students and
              professionals. Built for speed, clarity, and revenue potential.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-sand-100">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-white">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-3 flex items-center gap-4 text-sand-100">
              <a href="#" className="hover:text-white">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={22} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={22} />
              </a>
            </div>
            <p className="mt-4 text-sm text-sand-100">
              Email: support@multishells.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-sand-100">
          <p>
            &copy; {new Date().getFullYear()} Student Writing Helper. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
