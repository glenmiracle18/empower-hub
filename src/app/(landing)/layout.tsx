import { Navbar } from "@/components/navbar";
import "../globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Empower Hub",
  description: "The empowerment hub",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
