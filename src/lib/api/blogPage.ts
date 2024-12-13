import { Article, BlogPageType } from "@/types/types"

export const fetchBlogPageData = () => {
  const data = {
    imageSection: {
      _id: "1",
      header: "Insights and Inspiration",
      desc: "Dive into our collection of blogs where creativity meets strategy.From web development trends to marketing tips and design inspiration, discover insights that empower your journey in the digital world.Stay updated, stay inspired!",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
      alt: "Blog image"
    },
    blogDesc: {
      _id: "1",
      header: "Explore Our Blog",
      desc: "Dive into a wealth of knowledge on digital marketing, packed with insights, trends, and strategies to elevate your online presence.",
      buttonText: "Check out four of our latest articles:",
    },
    articlesList: [
      {
        _id: "1",
        header: "The Future of Digital Marketing: Trends to Watch in 2024",
        desc: "Explore the cutting-edge trends shaping the digital marketing landscape and how you can stay ahead of the curve.",
        href: "the-future-of-digital-marketing",
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024021/2150169364_foctbd.jpg",
          alt: "Digital marketing trends illustration",
        },
        content: {
          _id: "1",
          firstParagraph: "As we step into 2024, the digital marketing industry continues to evolve at an unprecedented pace. From AI-driven campaigns to hyper-personalization, businesses need to adapt quickly to stay competitive.",
          secondParagraph: "In this blog, we'll delve into key trends such as the rise of voice search, the importance of sustainable branding, and how to leverage data analytics for better ROI.",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "Marketing trends graph",
          },
        },
      },
      {
        _id: "2",
        header: "Mastering Social Media: Strategies for Maximum Engagement",
        desc: "Learn proven strategies to boost your social media engagement and grow your online presence.",
        href: "mastering-social-skills",
        image: {
          _id: "2",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1734024021/5453989_2805145_wdji8i.jpg",
          alt: "Social media engagement illustration",
        },
        content: {
          _id: "2",
          firstParagraph: "Social media platforms are the lifeblood of digital marketing, offering unparalleled opportunities to connect with your audience.",
          secondParagraph: "This blog covers actionable tips, from optimizing your posting schedule to crafting compelling visual content that resonates with your followers.",
          image: {
            _id: "2",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "Engaging social media posts",
          },
        },
      },
      {
        _id: "3",
        header: "SEO Secrets: How to Dominate Search Rankings in 2024",
        desc: "Uncover the latest SEO techniques to help your website rank higher and drive organic traffic.",
        href: "seo-secrets",
        image: {
          _id: "3",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024021/127578_jauppn.jpg",
          alt: "SEO graph illustration",
        },
        content: {
          _id: "3",
          firstParagraph: "Search Engine Optimization remains a cornerstone of digital marketing success. But the rules are constantly changing.",
          secondParagraph: "Discover how to optimize for voice search, improve website loading times, and create content that search engines and users will love.",
          image: {
            _id: "3",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "SEO optimization process",
          },
        },
      },
      {
        _id: "4",
        header: "Content Marketing Strategies That Actually Work",
        desc: "Learn how to craft content that drives traffic, generates leads, and builds brand loyalty.",
        href: "content-marketing-strategy",
        image: {
          _id: "4",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024020/133729_bhi8hk.jpg",
          alt: "Content marketing strategy illustration",
        },
        content: {
          _id: "4",
          firstParagraph: "Content is king, but creating impactful content requires more than just good writing. It's about strategy.",
          secondParagraph: "This blog explores how to identify your audience's needs, create value-driven content, and distribute it effectively across channels.",
          image: {
            _id: "4",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "Strategic content creation",
          },
        },
      },
    ]
  }

  return data as BlogPageType
}

export const fetchArticleData = async (name: string) => {
  const { articlesList } = await fetchBlogPageData()
  const article = articlesList.find((a) => a.href === name)
  return article as Article
}