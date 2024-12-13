import { fetchArticleData } from "@/lib/api/blogPage"
import Image from "next/image"

const ArticlePage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = await params
  const { name } = await resolvedParams
  const article = await fetchArticleData(name)

  if (!article) {
    return <div>Project do not found</div>
  }

  return (
    <div className="space-y-5 pb-5">
      <h5 className="text-lg lg:text-2xl border-b-2 pb-2">{article.header}</h5>
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
      <p>{article.content.firstParagraph}</p>
      <div className="relative aspect-video rounded-lg">
        <Image
          className="rounded-lg"
          src={article.content.image.src}
          alt={article.content.image.alt}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
      <p>{article.content.secondParagraph}</p>
    </div>
  )
}

export default ArticlePage