import { NextResponse } from 'next/server';

const projectsData = {
  projectsImage: {
    _id: "1",
    header: "Our Works",
    desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
    alt: "Our works image"
  },
  projectsDesc: {
    _id: "1",
    header: "At LevelUp",
    desc: "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
    buttonText: "Here are four examples of our notable works:",
  },
  projectsCta: {
    _id: "1",
    header: "Let us Bring your Ideas to Life in the Digital World.",
    desc: "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
    buttonText: "Start Project",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/5513846_2862210_lntbom.jpg",
    alt: "Call to action image"
  },
  projectsList: [
    {
      _id: "1",
      header: "Landing page",
      name: "Shikli - Interior Design",
      href: "http://localhost:3000/projects",
      desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326832/MOCKUP_-_PROFILE_PAGE_v7qj1n.png",
      alt: "Shikli - Interior Design"
    },
    {
      _id: "2",
      header: "Landing page",
      name: "Bride Boutique",
      href: "http://localhost:3000/projects",
      desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_BRIDE_BOUTIQUE_yjagtn.png",
      alt: "Bride Boutique"
    },
    {
      _id: "3",
      header: "Landing page",
      name: "Let's Garden",
      href: "http://localhost:3000/projects",
      desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326831/MOCKUP_-_LETS_GARDEN_qcdgki.png",
      alt: "Let's Garden website image"
    },
    {
      _id: "4",
      header: "Landing page",
      name: "SiteTech IL",
      href: "http://localhost:3000/projects",
      desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_SITETECH_xeiygk.png",
      alt: "SiteTech IL website image"
    },
  ],
};

export async function GET() {
  return NextResponse.json(projectsData);
}
