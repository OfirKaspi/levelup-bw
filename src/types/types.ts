// Reusable Base Interfaces
interface BaseEntity {
  _id: string;
}

interface Paragraph extends BaseEntity {
  header: string;
  desc: string;
  image?: Image
}

export interface Image extends BaseEntity {
  alt: string;
  src: string;
}

interface Link extends BaseEntity {
  text: string
  href: string
}

export interface ImageSectionType extends Image, Paragraph {
  buttonText?: string; // Optional field for button text
}

export interface CtaParagraph extends Paragraph {
  buttonText: string;
}

// Service Data
export interface OurServicesType extends BaseEntity {
  imageSection: ImageSectionType;
  services: ImageSectionType[];
}

// Website
export interface WebsitesPageType extends ImageSectionType {
  websitesCta: ImageSectionType
  websitesDesc: CtaParagraph
  imageSection: ImageSectionType
  websitesList: Website[]
}

export interface Website extends Paragraph {
  name: string
  backgroundColor: string
  images: Image
  logo: Image
  mockupImages: MockupImages
  externalLink: Link
  internalLink: Link
}

type MockupImages = {
  rightLaptop: Image;
  leftLaptop: Image;
  instagram: Image;
  phones: Image;
};

// Tech Data
export interface Tech extends Image {
  name: string;
}

// Review Data
export interface ClientReviewsType extends BaseEntity {
  imageSection: ImageSectionType;
  reviews: Review[];
}

export interface Review extends Paragraph, Image {
  name: string;
  role: string;
  link: Link;
}

// FAQ Data
export interface QuestionsType extends BaseEntity {
  imageSection: ImageSectionType;
  paragraphs: Paragraph[];
}

// Hero Data
export interface HeroType {
  header: string;
  subHeader: string;
  image: Image;
  video: Image;
  buttonText1: string;
  buttonText2: string;
}

// About
export interface AboutPageType extends BaseEntity {
  aboutUs: AboutUsType
  aboutUsSummary: AboutUsSummaryType
  ourStory: OurStoryType
}

export interface AboutUsType extends BaseEntity {
  imageSection: ImageSectionType;
  paragraph: Paragraph;
}

export interface AboutUsSummaryType extends BaseEntity {
  paragraph: Paragraph;
  ctaParagraph: CtaParagraph;
}

// Our Story Data
export interface OurStoryType extends BaseEntity {
  header: string;
  paragraphs: Paragraph[];
}

// Home Page Type
export interface HomePageType extends BaseEntity {
  ourServices: OurServicesType
  techs: Tech[]
  clientReviews: ClientReviewsType
  questions: QuestionsType
  subscription: ImageSectionType
  hero: HeroType
}

// Blog
export interface BlogPageType {
  imageSection: ImageSectionType
  articlesList: Article[]
  blogDesc: CtaParagraph
}

export interface Article extends Paragraph {
  href: string
  image: Image
  paragraphs: Paragraph[]
}

// Dvc
export interface DvcPageType {
  dvcDesc: CtaParagraph
  dvcCta: ImageSectionType
  imageSection: ImageSectionType
  dvcList: Image[]
}
