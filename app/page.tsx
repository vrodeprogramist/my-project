"use client";

import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";

const navigation = [
  { label: "Главная", href: "/" },
  { label: "О бюро", href: "/oburo" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1212]">
      <Header navigation={navigation} />
      <Hero 
        primaryButton={{
          text: "Client Access",
          onClick: () => console.log("Клик"),
        }}
        title=""
        description="Эксклюзивная архитектура. Ваше приватное пространство. Мы работаем с ограниченным числом клиентов год, чтобы гарантировать максимальное внимание к деталям и полную конфиденциальность. Ваш проект будет уникальным, как отпечаток пальца, а процесс его создания - таким же закрытым."
      />
    </div>
  );
}
