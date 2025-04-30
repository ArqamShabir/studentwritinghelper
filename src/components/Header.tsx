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
        { label: "Privacy", key : 'Privacy',  href: "/privacy-policy" },
        { label: "Terms Of Use", key : 'terms', href: "/terms-of-use" },
        { label: "Contact", key : 'contact-us', href: "/contact-us" },
      ];

  return (
    <div className="w-full bg-[#1E293B]">
        {/* Desktop Start */}
        
        <nav style={{top:'0',boxShadow:'0 1px 2px rgba(0, 0, 0, 0.1)'}} className="flex items-center bg-[#1E293B] text-white justify-between mx-auto w-full max-w-[1440px] px-6 lg:px-20 3xl:px-0 sticky z-30 py-4">
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src="/logo2.png" alt="logo" width={80} /> 
            <h2 className="text-[20px] tracking-[1px] font-[600]">SWH</h2>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] hover:text-[#CBD5E1] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>


        {/* Desktop End */}

         {/* Header for Mobile */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#1E293B] p-6 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        style={{ width: "100%", maxWidth: "430px" }}
      >
        <div
          className="mb-6"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link href="/" >
            <img src="/logo2.png" alt="logo" width={60} />
          </Link>
          <button onClick={toggleSidebar} className="text-white mb-4">
            <Image src="/close.svg" alt="close" width={32} height={32} />
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white cursor-pointer pb-1.5"
              onClick={toggleSidebar}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="mt-9 btn-responsive">
        </div>
      </div>

      {/* Menu Icon */}
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

      </nav>
    </div>
  )
}

export default Header