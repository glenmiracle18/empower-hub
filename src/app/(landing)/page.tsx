"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import Wildlife from "@/public/wildlife.jpg";

export default function Home() {
  const [openStory, setOpenStory] = useState(false);
  const stories: Story[] = [
    {
      id: 1,
      image: "/stories/4.png",
      title: "DSI",
    },
    {
      id: 2,
      image: "/stories/2.png",
      title: "Enfermeria",
    },
    {
      id: 3,
      image: "/stories/3.png",
      title: "Finanzas",
    },
    {
      id: 4,
      image: "/stories/1.png",
      title: "Farmacia",
    },
  ];

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="/"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow us Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            A one stop platform that promotes wildlife Conservation in 🇳🇬
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            By leveraging technology, EmpowerHub focuses on empowering youth,
            promoting gender equality, and contributing to wildlife conservation
          </p>
          <div className="space-x-4">
            <Link
              href="/sign-up"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Started
            </Link>
            <Link
              href="/sign-in"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Log-in
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center rounded-md">
          <Image
            src={Wildlife}
            width={1200}
            height={1200}
            alt="wildlife"
            className="p-8 rounded-md"
          />
        </div>
      </section>
    </>
  );
}
