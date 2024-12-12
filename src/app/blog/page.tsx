import { fetchBlogPageData } from "@/lib/api/blogPage"
import ArticlesList from "@/components/blog/ArticlesList"
import BlogDesc from "@/components/blog/BlogDesc"
import ImageSection from "@/components/common/ImageSection"

const BlogPage = () => {
  const { articlesList, blogDesc, imageSection } = fetchBlogPageData()
  return (
    <>
      <ImageSection data={imageSection} />
      <BlogDesc data={blogDesc} />
      <ArticlesList data={articlesList} />
    </>
  )
}

export default BlogPage