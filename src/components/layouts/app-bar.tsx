import React from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { IfvLoveIcon } from "@/components/common/icons";
import ButtonLink from "../common/button-link";
import { UserButton } from "@clerk/nextjs";

const AppBar = () => {
  return (
    <header className="relative z-10">
      <div className="ml-auto mr-auto max-w-full px-6 min-[0px]:w-[480px] lg:w-[1024px] lg:px-8 xl:w-[1440px] xl:px-16">
        <section className="flex items-center justify-center min-[0px]:min-h-[4rem] min-[0px]:justify-between lg:min-h-[7.5rem]">
          <Link
            className="relative min-[0px]:max-w-[5rem] lg:max-w-[7.5rem] lg:grow lg:p-0 "
            href="/"
            aria-label="ifv"
          >
            <h1 className="ml-2 text-2xl font-bold tracking-tight text-gray-900">
              EmpowerHub
            </h1>
          </Link>
          <nav className="hidden grow items-center justify-center gap-3 pl-8 lg:flex">
            <span className="ml-auto"></span>
            <ButtonLink
              href="/login"
              text="Inicia sesión"
              ariaLabel="Mi cuenta"
              variant="outline"
              className="hover:border-primary"
            />
            <ButtonLink
              href="/login-enterprise"
              text="Empresas"
              ariaLabel="Login empresas"
              className="group"
              icon={
                <ArrowLongRightIcon className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
              }
            />
            <span className="ml2 -5 w-5 ">
              <UserButton />
            </span>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default AppBar;
