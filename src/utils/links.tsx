import Favicon from "@/assets/favicon.svg"
import { BookOpen, Home, Images } from "lucide-react"

export const logoLink = { text: "Home", href: "/", src: Favicon, icon: <Home />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "About", href: "/about", icon: <BookOpen /> },
  { text: "Projects", href: "/projects", icon: <Images /> },
]
