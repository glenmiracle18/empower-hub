import BackButton from "@/components/common/back-button";
import { redirect } from "next/navigation";
import "../globals.css";

export const metadata = {
  title: "Inicia sesión",
  description: "Iniciar session en la plataforma de empleo de IFV",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col items-center md:flex-row">
      <BackButton type="chevron" />
      <div
        className="flex h-screen w-full items-center justify-center bg-background px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
        lg:px-16 xl:w-1/3 xl:px-12"
      >
        {children}
      </div>
    </section>
  );
}
