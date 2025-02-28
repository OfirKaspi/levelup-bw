import Image from "next/image"
import { Article } from "@/types/types"
import Link from "next/link"

interface ArticlePreviewProps {
  article: Article
}

const ArticlePreview = ({ article}: ArticlePreviewProps) => {
  return (
    <li key={article._id}>
      <Link href={`/blog/${article.href}`} className="flex flex-col justify-between h-full gap-5 md:border-2 md:p-5 md:rounded-lg">
        <header className="space-y-2">
          <h5 className="text-lg lg:text-2xl border-b-2 pb-2 font-bold">{article.header}</h5>
          <p className="text-sm lg:text-base text-muted-foreground">{article.desc}</p>
        </header>
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