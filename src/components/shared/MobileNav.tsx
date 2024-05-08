"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <h1 className="text-3xl text-primary">Cloudinary</h1>
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image src={"/assets/icons/menu.svg"} alt="Mobile Nav" width={32} height={32} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <h1 className="text-2xl text-primary">Cloudinary</h1>
                <ul className="header-nav_elements">
                  {navLinks.slice(0, 6).map(({ icon, route, label }) => {
                    const isActive = route === pathname;
                    return (
                      <li key={route} className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                        <Link href={route} className="sidebar-link cursor-pointer">
                          <Image src={icon} alt={`${label} ${icon}`} width={24} height={24} />
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
