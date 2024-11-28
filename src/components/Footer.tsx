import Contact from "./Contact";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="p-5 border-t-2 space-y-5">
      <Logo />
      <Separator />
      <FooterNavigation />
      <SocialMedia />
      <Contact />
      <p className="text-sm text-muted-foreground text-center">&copy; 2024 LevelUp. All Rights Reserved.</p>
    </footer>
  );
}
