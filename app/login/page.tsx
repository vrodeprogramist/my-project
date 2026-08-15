"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Header from "@/components/ui/Header";
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
       <Header navigation={navigation} />

      <div className="flex justify-center items-center pt-5 bg-#1c1212">
         <div className="w-100">
        <LoginForm
        onSubmit={(data) => {
          console.log("Данные входа:", data);
        }}
      /></div>
      </div>
     
      
    </div>
  );
}
