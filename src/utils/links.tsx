import Favicon from "@/assets/favicon.svg"
import { BookOpen, Home, Images, Newspaper } from "lucide-react"

export const logoLink = { text: "Home", href: "/", src: Favicon, icon: <Home />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "Projects", href: "/projects", icon: <Images /> },
  { text: "Blog", href: "/blog", icon: <Newspaper /> },
  { text: "About", href: "/about", icon: <BookOpen /> },
]
