"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import {
  FaPlus,
  FaHistory,
  FaShoppingBag,
  FaMicrochip,
  FaQuestionCircle,
  FaCreditCard,
  FaCode,
  FaDiscord,
  FaHome,
  FaSyncAlt,
  FaCog,
  FaSun,
  FaMoon,
  FaCommentDots,
} from "react-icons/fa";

export function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: "New Chat", icon: <FaCommentDots />, href: "/" },
    { name: "History", icon: <FaHistory />, href: "/history" },
    { name: "Store", icon: <FaShoppingBag />, href: "/store" },
    { name: "AI Tasks", icon: <FaMicrochip />, href: "/tasks" },
  ];

  const secondaryNavItems = [
    { name: "Support", icon: <FaQuestionCircle />, href: "/support" },
    { name: "Subscriptions", icon: <FaCreditCard />, href: "/subscriptions" },
    { name: "API Platform", icon: <FaCode />, href: "/api" },
    { name: "Discord", icon: <FaDiscord />, href: "/discord" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would toggle the 'dark' class on the document element
    // document.documentElement.classList.toggle('dark')
  };

  return (
    <aside className="w-64 h-screen border-r border-gray-200 flex flex-col bg-white shadow-sm text-slate-800">
      <div className="p-4">
        <Logo />
      </div>

      <div className="p-4">
        <Button fullWidth variant="outline" leftIcon={<FaPlus />} className="group">
          <span className="after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            New Chat
          </span>
        </Button>
      </div>

      <div className="px-4 py-2">
        <p className="text-xs font-medium text-gray-500 mb-2">Engagement</p>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:translate-x-1 group"
            >
              <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="px-4 py-2 mt-4">
        <p className="text-xs font-medium text-gray-500 mb-2">Help & Support</p>
        <nav className="space-y-1">
          {secondaryNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:translate-x-1 group"
            >
              <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200 flex justify-between">
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaHome />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaSyncAlt className="hover:rotate-180 transition-transform duration-700" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaCog className="hover:rotate-90 transition-transform duration-700" />
        </button>
        <button
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </aside>
  );
}
