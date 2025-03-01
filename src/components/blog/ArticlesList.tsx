import { Article } from "@/types/types"
import ArticlePreview from "@/components/blog/ArticlePreview"

interface ArticlesListProps {
  data: Article[]
}

const ArticlesList = ({ data: articles }: ArticlesListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10 md:max-w-3xl lg:max-w-5xl md:mx-auto">
      {articles.map((article) => (
        <ArticlePreview key={article._id} article={article}/>
      ))}
    </ul>
  )
}

export default ArticlesList