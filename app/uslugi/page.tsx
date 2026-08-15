"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Header from "@/components/ui/Header";
import LoginForm from "@/components/ui/LoginForm";
import Header2 from "@/components/ui/Header2";

const navigation = [
  { label: "Главная", href: "/" },
  { label: "О бюро", href: "/oburo" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export default function uslugi() {
  return (
    <div>
      <Header2 navigation={navigation} />
      <Hero subtitle="" title="Наши Услуги" />
      <Hero
        description=""
        title="1.Ландшавный дизайн                   2.Ландшафт под ключ                       3.Дизайн интерьера под ключ 4.Комплексное решение"
        image={
          <div className="w-full h-96 bg-gradient-to-br rounded-2xl flex items-center justify-center text-white text-6xl">
            
          </div>
        }
       
        
      />
      F
    </div>
  );
}
