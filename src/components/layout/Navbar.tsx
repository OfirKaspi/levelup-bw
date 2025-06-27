"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { links } from "@/components/common/links";
import useResponsive from "@/hooks/useResponsive";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/common/Logo";
import LeaveDetailsDialog from "@/components/forms/leave-details-form/LeaveDetailsFormDialog";
import { useEffect, useState } from "react";

const Navbar = () => {

  const data = {
    _id: "1",
    header: "ברוכים הבאים ל-LevelUp!",
    buttonText: "צור קשר",
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isDesktop } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 w-full h-20 p-5 z-50 flex flex-row-reverse items-center justify-between transition-all duration-300 
        ${isScrolled
          ? "bg-white/80 backdrop-blur shadow-sm"
          : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <Logo isTextWhite={isHomePage && !isScrolled} />

      {(!isDesktop) && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-purple-800 text-slate-100 h-10 w-10 p-2 rounded-md"
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
                <LeaveDetailsDialog text={data.buttonText} />
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      )}
      {isDesktop && (
        <>
          <ul className="flex gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-label={link.text}
                  className={`flex items-center justify-center h-10 px-4 rounded-md transition-all duration-300 ${isHomePage && !isScrolled && "text-white"
                    } ${pathname === link.href
                      ? "bg-purple-800 text-white"
                      : "hover:bg-purple-600 hover:text-white"
                    }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>


          <LeaveDetailsDialog text={data.buttonText} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
