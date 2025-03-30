import { fetchBlogPageData } from "@/lib/api/blogPage"
import ArticlesList from "@/components/blog/ArticlesList"
import ImageSection from "@/components/common/ImageSection"
import PageDesc from "@/components/common/PageDesc"

const BlogPage = () => {
  const { articlesList, blogDesc, imageSection } = fetchBlogPageData()
  return (
    <>
      <ImageSection data={imageSection} />
      <PageDesc data={blogDesc} />
      <ArticlesList data={articlesList} />
    </>
  )
}

export default BlogPage