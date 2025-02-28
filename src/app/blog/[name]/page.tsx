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
    <div className="max-w-screen-sm mx-auto space-y-5 pt-5 pb-10">
      <header className="space-y-2">
        <h5 className="text-lg lg:text-2xl border-b-2 pb-2 font-bold">{article.header}</h5>
        <p className="lg:text-lg">{article.desc}</p>
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
      <ul className="space-y-5">
        {article.paragraphs.map((paragraph) => (
          <li key={paragraph._id} className="space-y-5">
            {paragraph.image &&
              <div className="relative aspect-video rounded-lg">
                <Image
                  className="rounded-lg"
                  src={paragraph.image.src}
                  alt={paragraph.image.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
            }
            <div className="space-y-2">
              <h6 className="lg:text-lg font-bold">{paragraph.header}</h6>
              <p className="text-sm lg:text-base">{paragraph.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlePage