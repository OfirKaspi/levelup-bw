import { Project, ProjectsPageType } from "@/types/types";

export const fetchProjectsPageData = async () => {
  const data = {
    imageSection: {
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
        href: "shikli",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        background: {
          _id: "1",
          color: "#d3d3d3",
          images: [
            {
              _id: "1",
              src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733912189/freepik-export-202412111015457CJs_huyk7q.png",
              alt: "Shikli first background image",
            },
            {
              _id: "2",
              src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733912189/freepik-export-20241211101353ghiu_pkyzqz.png",
              alt: "Shikli second background image",
            }
          ]
        },
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Shikli_-_Logo_c8egtq.png",
          alt: "Shikli Logo image"
        },
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326832/MOCKUP_-_PROFILE_PAGE_v7qj1n.png",
          alt: "Shikli - Interior Design"
        }
      },
      {
        _id: "2",
        header: "Landing page",
        name: "Bride Boutique",
        href: "bride-boutique",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        background: {
          _id: "1",
          color: "#fadbdb",
          image: {
            _id: "1",
            src: "",
            alt: "Bride Boutique background image",
          }
        },
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Bride_Boutique_-_logo_pkvdh1.png",
          alt: "Bride Boutique image"
        },
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_BRIDE_BOUTIQUE_yjagtn.png",
          alt: "Bride Boutique"
        }
      },
      {
        _id: "3",
        header: "Landing page",
        name: "Let's Garden",
        href: "lets-garden",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        background: {
          _id: "1",
          color: "#cae3b7",
          image: {
            _id: "1",
            src: "",
            alt: "Lets garden background image",
          }
        },
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Let_s_Garden_-_Logo_nmnfk1.png",
          alt: "Let's Garden image"
        },
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326831/MOCKUP_-_LETS_GARDEN_qcdgki.png",
          alt: "Let's Garden website image"
        }
      },
      {
        _id: "4",
        header: "Landing page",
        name: "SiteTech IL",
        href: "sitetech",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        background: {
          _id: "1",
          color: "#a4ccd3",
          image: {
            _id: "1",
            src: "",
            alt: "SiteTech IL background image",
          }
        },
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/SiteTech_-_Logo_h9jmvr.png",
          alt: "SiteTech IL image"
        },
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_SITETECH_xeiygk.png",
          alt: "SiteTech IL website image"
        }
      },
    ],
  };

  return data as ProjectsPageType;
};

export const fetchProjectData = async (name: string) => {
  const { projectsList } = await fetchProjectsPageData()
  const project = projectsList.find((p) => p.href === name)
  return project as Project
}