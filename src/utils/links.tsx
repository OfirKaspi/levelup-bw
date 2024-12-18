import Favicon from "@/assets/favicon.svg"
import { BookOpen, Home, Images, Newspaper } from "lucide-react"

export const logoLink = { text: "בית", href: "/", src: Favicon, icon: <Home />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "פרויקטים", href: "/projects", icon: <Images /> },
  { text: "בלוג", href: "/blog", icon: <Newspaper /> },
  { text: "אודות", href: "/about", icon: <BookOpen /> },
]
