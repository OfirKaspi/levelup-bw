import LevelUpLogo from "@/assets/levelup-logo.png"
import { BookOpen, CodeXml, Home, Newspaper, Nfc } from "lucide-react"

export const logoLink = { text: "בית", href: "/", src: LevelUpLogo, icon: <Home />, alt: "LevelUp Logo", title: "LevelUp" }

export const links = [
  { ...logoLink },
  { text: "כרטיסים דיגיטליים", href: "/dvc", icon: <Nfc /> },
  { text: "אתרים", href: "/websites", icon: <CodeXml /> },
  { text: "בלוג", href: "/blog", icon: <Newspaper /> },
  { text: "אודות", href: "/about", icon: <BookOpen /> },
]
