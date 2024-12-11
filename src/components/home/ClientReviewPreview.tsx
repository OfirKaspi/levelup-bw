import Image from "next/image"
import { Review } from "@/types/types"
import useResponsive from "@/hooks/useResponsive"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ClientReviewPreviewProps {
  review: Review
}

const ClientReviewPreview = ({ review }: ClientReviewPreviewProps) => {
  const { isMobile } = useResponsive()
  return (
    <li
      key={review._id}
      className="flex flex-col gap-5 justify-between border-2 p-5 rounded-lg"
    >
      <div className="space-y-2">
        <h4 className="text-purple-800 font-bold">{review.header}</h4>
        <p className="text-muted-foreground">{review.desc}</p>
      </div>
      <footer className="flex justify-between border-2 p-3 rounded-md">
        <div className="flex gap-2">
          <Image
            src={review.src}
            alt={review.alt}
            height={40}
            width={40}
            className="object-cover h-10 w-10 rounded-sm"
          />
          <div className="text-sm">
            <header className="font-bold">{review.name}</header>
            <p className="text-muted-foreground">{review.role}</p>
          </div>
        </div>
        {!isMobile && <Link href={review.link.href}><Button className="bg-purple-800 w-full h-10">{review.link.text}</Button></Link>}
      </footer>
      {isMobile && <Link href={review.link.href}><Button className="bg-purple-800 w-full h-10">{review.link.text}</Button></Link>}
    </li>
  )
}

export default ClientReviewPreview