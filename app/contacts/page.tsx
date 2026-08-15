"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Header2 from "@/components/ui/Header2";
import LoginForm from "@/components/ui/LoginForm";

const navigation = [
  { label: "Главная", href: "/" },
  { label: "О бюро", href: "/oburo" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export default function About() {
  return (
    <div>
            <Header2 navigation={navigation} />
<Hero 
  subtitle="Наши Контакты"
  
  title="89137169928 - Mikhail   89137219379 - Egor"

/>

        

</div>
      
  );
}
