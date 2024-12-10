import Contact from "@/components/layout/Contact";
import FooterNavigation from "@/components/layout/FooterNavigation";
import Logo from "@/components/common/Logo";
import SocialMedia from "@/components/layout/SocialMedia";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="p-5 space-y-5 lg:space-y-10 lg:py-10 border-t-2">
      <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-[1fr_auto_1fr] justify-center items-center w-full ">
        <div className="border-b-2 lg:border-none pb-5 lg:pb-0 lg:flex">
          <Logo />
        </div>
        <FooterNavigation />
        <SocialMedia />
      </div>
      <Separator className="hidden lg:flex" />
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <Contact />
        <p className="text-sm text-muted-foreground text-center">&copy; 2024 LevelUp. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
