"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import logo from "../../public/Images/idpcTransparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="IDPC 2025"
            width={80}
            height={50}
            className="p-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-yellow-400 transition-all duration-300"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/AboutGUBCPA"
              className="text-gray-800 hover:text-yellow-400 transition-all duration-300"
            >
              About GUBCPA
            </Link>
            {/* {activeDropdown === "about" && (
              <ul className="absolute left-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200">
                <li>
                  <Link
                    href="/AboutGUBCPA"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    About GUBCPA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AboutSite"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    About Site
                  </Link>
                </li>
              </ul>
            )} */}
          </div>

          <Link
            href="/EventSchedule"
            className="text-gray-800 hover:text-yellow-400 transition-all duration-300"
          >
            Schedule
          </Link>
          <Link
            href="/PrizePool"
            className="text-gray-800 hover:text-yellow-400 transition-all duration-300"
          >
            Prize Pool
          </Link>
          <Link
            href="/Register"
            className="text-gray-800 hover:text-yellow-400 transition-all duration-300"
          >
            Registration
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiMenu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 w-2/3 h-full bg-white text-gray-800 flex flex-col items-center pt-16 space-y-4 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg border-l border-gray-200`}
      >
        <Link
          href="/"
          className="text-xl hover:text-yellow-400"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/AboutGUBCPA"
          className="text-xl hover:text-yellow-400"
          onClick={toggleMenu}
        >
          About GUBCPA
        </Link>
        <Link
          href="/PrizePool"
          className="text-xl hover:text-yellow-400"
          onClick={toggleMenu}
        >
          Prize Pool
        </Link>
        <Link
          href="/EventSchedule"
          className="text-xl hover:text-yellow-400"
          onClick={toggleMenu}
        >
          Schedule
        </Link>
        <Link
          href="/Register"
          className="text-xl hover:text-yellow-400"
          onClick={toggleMenu}
        >
          Registration
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
