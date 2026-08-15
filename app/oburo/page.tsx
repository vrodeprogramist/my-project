'use client'
import Image from "next/image";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import {useState} from 'react';
import Header2 from "@/components/ui/Header2";
import Hero from "@/components/ui/HeroByro";

const navigation = [
  { label: "Главная", href: "/" },
  { label: "О бюро", href: "/oburo" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export default function About() {
  return (
    
    <div className="h-xl">
        <Header2 navigation={navigation} />
        <div className="flex justify-center">
            <div className="w-2/3">
<Hero 
  title="We design private worlds"
  
  description="Architicture & Interior  Landscape Design Full confidentiality   By referral only"
  image={
    <div className="w-full h-96  rounded-2xl flex items-center justify-center text-white text-6xl">
              <img src="/images2/Логотип2.png" alt="logo" width={570} height={700}/>
            
    </div>
  }
/>
        </div>
        </div>
    </div>
  );
}