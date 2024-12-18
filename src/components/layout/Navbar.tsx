"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import useResponsive from "@/hooks/useResponsive";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/common/Logo";
import LeaveDetailsButton from "@/components/common/LeaveDetails";


const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { isMobile } = useResponsive()

  return (
    <nav className="w-full p-5 z-10 flex flex-row-reverse items-center justify-between ">
      {/* Logo  */}
      <Logo isTextWhite={isHomePage} />

      {isMobile ? (
        <Sheet>
          <SheetTrigger>
            <Menu className="bg-slate-300 text-purple-800 h-10 w-10 p-2 rounded-md" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="text-purple-800 pt-5">
              ברוכים הבאים ל-LevelUp!
            </SheetTitle>
            <Separator className="my-5" />
            <SheetDescription asChild  >
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
                <LeaveDetailsButton>
                  צור קשר
                </LeaveDetailsButton>
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

          <LeaveDetailsButton>
            צור קשר
          </LeaveDetailsButton>
        </>
      )}
    </nav>
  );
}

export default Navbar