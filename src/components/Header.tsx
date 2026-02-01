"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };  

    const navLinks = [
        { label: "Home", key : 'home',  href: "/" },
        { label: "Calculators", key : "calculators", href: "/calculators" },
        { label: "Privacy", key : 'Privacy',  href: "/privacy-policy" },
        { label: "Terms Of Use", key : 'terms', href: "/terms-of-use" },
        { label: "Contact", key : 'contact-us', href: "/contact-us" },
      ];

  return (
    <div className="w-full bg-sand-50">
      <nav className="sticky top-0 z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-sand-200 bg-sand-50 px-6 py-4 backdrop-blur lg:px-20 3xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo2.png" alt="logo" width={52} />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-ink-600">
              Student Tools
            </p>
            <h2 className="text-lg font-semibold text-ink-900">SWH</h2>
          </div>
        </Link>

        <ul className="hidden h-full items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-sm font-medium text-ink-900 transition hover:text-ink-600"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Link
          href="/calculators"
          className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-soft lg:inline-flex"
        >
          Browse Calculators
        </Link>

        <div className="lg:hidden">
          <Image
            src="/menu.png"
            alt="menu"
            width={22}
            height={22}
            className="inline-block cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div
          className={`fixed right-0 top-0 h-screen bg-ink-900 p-6 text-white transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          style={{ width: "100%", maxWidth: "430px" }}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link href="/">
              <img src="/logo2.png" alt="logo" width={40} />
            </Link>
            <button onClick={toggleSidebar} className="text-white">
              <Image src="/close.svg" alt="close" width={32} height={32} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-base font-medium"
                onClick={toggleSidebar}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <Link
            href="/calculators"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-900"
            onClick={toggleSidebar}
          >
            Browse Calculators
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header
