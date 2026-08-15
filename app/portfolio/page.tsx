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
              <Header navigation={navigation} />
<Hero 
  title="Вы можете посмотреть наши работы"
  
  description="Architicture & Interior  Landscape Design Full confidentiality   By referral only"
  image={
    <div className="w-120 h-96  rounded-full flex items-center justify-center ">
              <img src="/images2/image.png" alt="logo" width={500} height={700} className="rounded-4xl"/>
            
    </div>
  }
        
      />
      F
    </div>
  );
}
