"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: { label: string; href: string }[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1c1212] border-b border-white/10 py-4">
      <div className="flex items-center justify-between">
        {/* Логотип - УВЕЛИЧЕННЫЙ ДЛЯ ПК */}
        <div className="flex items-center gap-2">
          {logo || (
            <img 
              src="/images2/Логотип2.png" 
              alt="logo" 
              className="h-12 w-auto md:h-16 lg:h-20" // <- тут размеры
            />
          )}
        </div>

        {/* Десктопная навигация */}
        {navigation && (
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-red-950 font-medium transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Кнопка-бургер для мобильных */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-red-950"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Действия (кнопки, иконки) */}
        {actions && <div className="hidden md:flex items-center gap-4">{actions}</div>}
      </div>

      {/* Мобильное меню */}
      {isOpen && navigation && (
        <div className="md:hidden py-4 border-t border-white/10 mt-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-200 hover:text-red-950 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
