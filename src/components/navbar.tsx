import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { userId } = auth();
  return (
    <nav className="flex justify-center">
      <div className="jusify-between flex items-center gap-28 border-b border-slate-300 px-4 py-2">
        <Link href="/">
          <h1 className="cursor-pointer p-2 text-2xl font-semibold tracking-tight text-slate-900 hover:text-slate-500">
            EmpowerHub
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <h2>Home</h2>
          <Link href="/survey">
            <h2>Survey</h2>
          </Link>
          <h2>About</h2>
          {userId ? (
            <span className="ml-6 ">
              <UserButton />
            </span>
          ) : (
            <Button variant="outline">Sign-in</Button>
          )}
        </div>
      </div>
    </nav>
  );
};
