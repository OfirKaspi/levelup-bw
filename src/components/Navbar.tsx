"use client"

import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";


const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className="w-full p-5 z-10">
      <nav className="flex items-center justify-between">
        {/* Logo  */}
        <Logo isTextWhite={isHomePage} />

        {/* menu  */}
        <Sheet>
          <SheetTrigger>
            {/* <div className="w-10 h-10 bg-slate-400 flex items-center justify-center rounded-md"> */}
            <Menu className="bg-slate-300 text-indigo-500 h-10 w-10 p-2 rounded-md" />
            {/* </div> */}
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="text-indigo-500">
              Welcome to LevelUp!
            </SheetTitle>
            <Separator className="my-2" />
            <SheetDescription asChild>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex gap-2 items-center text-base">
                      {link.icon}
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Navbar