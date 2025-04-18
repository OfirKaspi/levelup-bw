import LevelUpLogo from "@/assets/levelup-logo.png"
import { BookOpen, Home, Images, Newspaper } from "lucide-react"

export const logoLink = { text: "בית", href: "/", src: LevelUpLogo, icon: <Home />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "פרויקטים", href: "/projects", icon: <Images /> },
  { text: "בלוג", href: "/blog", icon: <Newspaper /> },
  { text: "אודות", href: "/about", icon: <BookOpen /> },
]
