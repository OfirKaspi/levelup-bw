import Favicon from "@/assets/favicon.svg"
import { BookOpen, Home, Images } from "lucide-react"

export const logoLink = { text: "Home", href: "/", src: Favicon, icon: <Home size={20} />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "About", href: "/about", icon: <BookOpen size={20} /> },
  { text: "Projects", href: "/projects", icon: <Images size={20} /> },
]
