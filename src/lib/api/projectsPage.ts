import { Project, ProjectsPageType } from "@/types/types";

export const fetchProjectsPageData = async () => {
  const data = {
    imageSection: {
      _id: "1",
      header: "הפרויקטים שלנו",
      desc: "אנחנו משקיעים בפרויקטים שלנו כאילו העסק שלך הוא שלנו, החל משיחת האיפיון והגדרת הצרכים והמטרות, ממשיך בעדכונים מעת לעת, הצגת ביניים, תיקונים, שינויים וכל מה שצריך עד שתרגישו שהגעתם לנחלה. הנוסחה הזאת גורמת להכל לעבוד טוב יותר, לנו כסוכנות דיגיטל מקצועית ואיכותית, ובעיקר לכם שתהיו שלמים עם האתר והנוכחות הדיגיטלית שלכם.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740676115/LevelUp/31641175_c15_jhtvlh.jpg",
      alt: "Our works image"
    },
    projectsDesc: {
      _id: "1",
      header: "תנו לנו להראות לכם איך עושים את זה",
      desc: "הייתה לנו את הזכות לייצר מגוון אתרים מתחומים שונים ולספק מוצרים דיגיטליים יוצאי דופן שמביאים הצלחה.",
      buttonText: "לפנייך מספר פרוייקטים לדוגמה:",
    },
    projectsCta: {
      _id: "1",
      header: "תן לנו להפוך את החלום שלך למציאות בעולם הדיגיטלי",
      desc: "אנחנו כאן כדי להקשיב, להבין ולהגשים את החזון שלך – בין אם מדובר באתר מרהיב עם חוויית משתמש יוצאת דופן, קמפיינים שיווקיים שיגיעו לכל אחד או כל מוצר נוסף שיעזור לך להשיג נוכחות מקוונת ומותאמת אישית לצרכים שלך, בדיוק כמו שאתה מדמיין.  השאר לנו פרטים עכשיו ונתכנן יחד את הצעד הבא בדרך להצלחה דיגיטלית שתעיף את העסק שלך קדימה!",
      buttonText: "לשיחת ייעוץ ללא עלות לחץ כאן",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740676115/LevelUp/33218313_r27_dubi81.jpg",
      alt: "Call to action image"
    },
    projectsList: [
      {
        _id: "1",
        header: "Landing page",
        name: "Shikli - Interior Design",
        internalLink: {
          _id: "1",
          href: "shikli",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "2",
          href: "https://shikli.thelevelupagency.com/",
          text: "לאתר",
        },
        desc: "שיקלי מביאה לכם חוויית עיצוב פנים מרהיבה בהתאמה אישית. אנו מתמחים ביצירת חללים ייחודיים ומעוצבים בקפידה, תוך שילוב סגנון מודרני עם אלמנטים חמים ואישיים. עם צוות מקצועי וקשוב, אנו נהפוך את הבית שלכם למקום חלומי שמרגיש בדיוק כמו שתמיד רציתם.",
        background: {
          _id: "1",
          color: "#d3d3d3",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734091474/freepik__create-a-minimalistic-luxurious-frame-with-a-sleek__5559_qdp2bv.png",
            alt: "Shikli background image"
          }
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
        internalLink: {
          _id: "1",
          href: "bride-boutique",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "1",
          href: "https://bride-boutique.thelevelupagency.com/",
          text: "לאתר",
        },
        desc: "Bride Boutique הוא המקום שבו כל כלה מוצאת את השמלה המושלמת. עם מבחר רחב של שמלות כלה יוקרתיות, עיצובים מרהיבים ושירות אישי וחם, אנו מלווים כל כלה בדרך ליום הגדול שלה. אצלנו תמצאי את השילוב המושלם בין סטייל, נוחות ואלגנטיות - כי מגיע לך להרגיש כמו נסיכה ביום החתונה שלך.",
        background: {
          _id: "1",
          color: "#fadbdb",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734089259/freepik__light-pink-frame-with-flowers-white-background-no-__83044_kcqh6g.png",
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
        internalLink: {
          _id: "1",
          href: "lets-garden",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "1",
          href: "https://lets-garden.thelevelupagency.com/",
          text: "לאתר",
        },
        desc: "Let's Garden הופכת כל גינה לפנינת טבע קסומה. אנו מציעים פתרונות גינון יצירתיים, התאמה אישית לכל חלל חיצוני ושירות מקצועי מהלב. בין אם מדובר בעיצוב גינות פרטיות, מרפסות פורחות או שטחים ירוקים לעסקים, אנו כאן כדי להפוך כל חלום ירוק למציאות פורחת.",
        background: {
          _id: "1",
          color: "#cae3b7",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734089259/freepik__create-a-transparent-background-with-a-decorative-__67369_tybzhb.png",
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
        internalLink: {
          _id: "1",
          href: "sitetech",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "1",
          href: "https://site-tech.thelevelupagency.com/",
          text: "לאתר",
        },
        desc: "SiteTech IL מתמחה ביצירת אתרים מודרניים וחדשניים שמביאים תוצאות. אנו מספקים פתרונות דיגיטליים מתקדמים, תוך דגש על עיצוב מרשים, חוויית משתמש איכותית וקידום אפקטיבי. עם ניסיון עשיר וצוות מקצועי, נבנה עבורכם אתר שמייצג אתכם בצורה מושלמת ומקדם את העסק שלכם קדימה.",
        background: {
          _id: "1",
          color: "#a4ccd3",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734091713/freepik__teal-background-image-with-screens-and-laptops__5560_wyuzex.png",
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
  const project = projectsList.find((p) => p.internalLink.href === name)
  return project as Project
}