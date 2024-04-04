import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://ifvempleos.vercel.app/",
  ),
  title: {
    default: "EMH",
    template: `%s - IFV`,
  },
  description: "Plataforma de empleo de IFV",
  manifest: "/manifest.json",
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' }
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: "./opengraph-image.png",
  },
  twitter: {
    images: "./twitter-image.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ClerkProvider>
        <Navbar />
        {children}
        <Footer />
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  );
}
