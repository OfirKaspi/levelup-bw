"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import useResponsive from "@/hooks/useResponsive";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "@/components/Logo";


const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { isMobile } = useResponsive()

  return (
    <nav className="w-full py-5 z-10 flex items-center justify-between">
      {/* Logo  */}
      <Logo isTextWhite={isHomePage} />

      {isMobile ? (
        <Sheet>
          <SheetTrigger>
            <Menu className="bg-slate-300 text-purple-800 h-10 w-10 p-2 rounded-md" />
          </SheetTrigger>
          <SheetContent >
            <SheetTitle className="text-purple-800 pt-5">
              Welcome to LevelUp!
            </SheetTitle>
            <Separator className="my-5" />
            <SheetDescription asChild >
              <div className="space-y-5">
                <ul className="space-y-5">
                  {links.map((link) => (
                    <Link role="list" key={link.href} href={link.href} className={`flex gap-2 items-center text-base ${pathname === link.href && 'text-purple-800'}`}>
                      {link.icon}
                      {link.text}
                    </Link>
                  ))}
                </ul>
                <Separator />
                <div className="relative inline-flex group">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
                  <button className="relative h-10 px-4 text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Contact Us
                  </button>
                </div>
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <ul className="flex gap-2">
            {links.map((link) => (
              <Link role="list" key={link.href} href={link.href} className={`flex items-center justify-center h-10 px-4 rounded-md transition-all ${isHomePage && 'text-white'} ${pathname === link.href ? 'bg-gray-900 text-white' : 'hover:bg-purple-800 hover:text-white'}`}>
                {link.text}
              </Link>
            ))}
          </ul>

          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
            <button className="relative h-10 px-4 text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Contact Us
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar