import { Tech } from "@/types/types"
import Image from "next/image"

interface TechPreviewProps {
  tech: Tech
}

const TechPreview = ({ tech }: TechPreviewProps) => {
  return (
    <li className='flex justify-center h-[60px] grayscale hover:grayscale-0 transition-all'>
      <Image
        src={`/tech-icons/${tech.src}.svg`}
        alt={tech.alt}
        width={60}
        height={60}
      />
    </li>
  )
}

export default TechPreview