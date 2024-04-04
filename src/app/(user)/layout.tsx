import "../globals.css";
import AsideFeed from "@/components/layouts/aside-feed";
import { NavBar } from "@/components/layouts/navbar";
import SidebarFeed from "@/components/layouts/sidebar-feed";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="bg-background">
      <main
        vaul-drawer-wrapper=""
        className="z-10 ml-auto mr-auto flex max-w-full justify-center bg-background py-0 lg:w-[1024px] lg:px-8 xl:w-[1440px] xl:px-16"
      >
        <NavBar user={userId} />
        <SidebarFeed user={userId} />
        <div className="w-full pt-4 sm:p-10 lg:w-[75%] lg:pr-0 lg:pt-6 xl:w-[50%] xl:pr-4">
          {children}
        </div>
        <AsideFeed />
      </main>
    </div>
  );
}
