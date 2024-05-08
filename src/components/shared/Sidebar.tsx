"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <h1 className="text-3xl text-primary">Cloudinary</h1>
        </Link>

        <SignedIn>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav_elements">
              {navLinks.map(({ icon, route, label }) => {
                const isActive = route === pathname;
                return (
                  <li key={route} className={`sidebar-nav_element group ${isActive ? "bg-gray-900 text-white" : "text-gray-700"}`}>
                    <Link href={route} className="sidebar-link">
                      <Image src={icon} alt={`${label} ${icon}`} width={24} height={24} className={`${isActive && "brightness-200"}`} />
                      {label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName afterSignOutUrl="/" />
              </li>
            </ul>
          </nav>
        </SignedIn>

        <SignedOut>
          <Button asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </div>
    </aside>
  );
};

export default Sidebar;
