import { logoLink } from "@/utils/links"
import Image from "next/image"
import Link from "next/link"

type Props = {
  isTextWhite?: boolean
}

const Logo = ({ isTextWhite = false }: Props) => {
  return (
    <Link href={logoLink.href} className={`flex items-center justify-center text-xl font-bold ${isTextWhite ? "text-white" : "text-purple-800 dark:text-gray-100"} `}>
      <Image
        src={logoLink.src}
        alt={logoLink.alt}
        height={50}
        width={50}
        className="h-[50px] w-[50px]"
      />
      <span>{logoLink.title}</span>
    </Link>
  )
}

export default Logo