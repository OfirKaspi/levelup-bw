import Image from "next/image"
import { Article } from "@/types/types"
import Link from "next/link"

interface ArticlePreviewProps {
  article: Article
  index: number
}

const ArticlePreview = ({ article, index }: ArticlePreviewProps) => {
  return (
    <li key={article._id}>
      <Link href={`/blog/${article.href}`} className="flex flex-col gap-5 py-5">
        <h5 className="text-lg lg:text-2xl border-b-2 pb-2">{index < 9 ? `0${index + 1}` : index + 1}: {article.header}</h5>
        <p className="text-sm lg:text-base text-muted-foreground">{article.desc}</p>
        <div className="relative aspect-video rounded-lg">
          <Image
            className="rounded-lg"
            src={article.image.src}
            alt={article.image.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      </Link>
    </li>
  )
}

export default ArticlePreview