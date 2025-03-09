import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full">
    <footer className="bg-gray-900 text-gray-300 py-8 mx-auto max-w-[1440px]">
      <div className="container mx-auto px-6 grid gap-6 md:grid-cols-3">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Student Writing Helper</h2>
          <p className="mt-2 text-gray-400">
            Your go-to platform for academic tools like calculators, paraphrasing, and more.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gray-400">Privacy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-gray-400">Terms Of Use</Link></li>
            <li><Link href="/contact-us" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
          </div>
          <p className="mt-4 text-gray-400">Email: support@multishells.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Student Writing Helper. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
