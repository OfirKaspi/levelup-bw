import { logoLink } from "@/utils/links"
import Image from "next/image"
import Link from "next/link"

type Props = {
  isTextWhite?: boolean
  isTextShow?: boolean
  size?: number
}

const Logo = ({ isTextWhite = false, isTextShow = true, size = 50 }: Props) => {
  return (
    <Link href={logoLink.href} className={`flex items-center justify-center text-xl font-bold gap-2 ${isTextWhite ? "text-white" : "text-purple-800 dark:text-gray-100"} `}>
      {isTextShow && <span>{logoLink.title}</span>}
      <Image
        src={logoLink.src}
        alt={logoLink.alt}
        width={size}
        height={1}
        className={`h-auto w-[${size}px]`}
      />
    </Link>
  )
}

export default Logo