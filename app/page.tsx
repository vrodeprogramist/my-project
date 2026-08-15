'use client'
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";
import Header from "@/components/ui/Header";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/ui/RegisterForm";

const navigation = [
  { label: "Главная", href: "/" },
  { label: "О бюро", href: "/oburo" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <Header navigation={navigation} />
      <Hero 
        primaryButton={{
          text: "Client Access",
          onClick: () => router.push("/register"),
          
        }}
        title=""
        description="Эксклюзивная архитектура. Ваше приватное пространство.
Мы работаем с ограниченным числом клиентов год, чтобы гарантировать максимальное внимание к деталям и полную конфиденциальность. Ваш проект будет уникальным, как отпечаток пальца, а процесс его создания - таким же закрытым."
      />

      
    </div>
  );
}