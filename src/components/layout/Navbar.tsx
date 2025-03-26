"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import useResponsive from "@/hooks/useResponsive";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/common/Logo";
import LeaveDetailsButton from "@/components/common/LeaveDetails";
import { useState } from "react";

const Navbar = () => {
  const data = {
    _id: "1",
    header: "ברוכים הבאים ל-LevelUp!",
    buttonText: "צור קשר",
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isMobile } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full p-5 z-10 flex flex-row-reverse items-center justify-between">
      {/* Logo */}
      <Logo isTextWhite={isHomePage} />

      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-slate-300 text-purple-800 h-10 w-10 p-2 rounded-md"
              aria-label="תפריט ניווט"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent className="w-fit">
            <SheetTitle className="text-purple-800 pt-5">{data.header}</SheetTitle>
            <Separator className="my-5" />
            <SheetDescription asChild>
              <div className="space-y-5">
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-label={link.text}
                        onClick={closeSheet} // Close sheet on link click
                        className={`flex gap-2 items-center text-base ${pathname === link.href && "text-purple-800"
                          }`}
                      >
                        {link.icon}
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Separator />
                <LeaveDetailsButton text={data.buttonText} />
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <ul className="flex gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-label={link.text}
                  className={`flex items-center justify-center h-10 px-4 rounded-md transition-all ${isHomePage && "text-white"
                    } ${pathname === link.href
                      ? "bg-gray-900 text-white"
                      : "hover:bg-purple-800 hover:text-white"
                    }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>


          <LeaveDetailsButton text={data.buttonText} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
