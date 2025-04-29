import { Project, ProjectsPageType } from "@/types/types";

export const fetchProjectsPageData = async () => {
  const data = {
    imageSection: {
      _id: "1",
      header: "הפרויקטים שלנו",
      desc: "אנחנו משקיעים בפרויקטים שלנו כאילו העסק שלך הוא שלנו, החל משיחת האיפיון והגדרת הצרכים והמטרות, ממשיך בעדכונים מעת לעת, הצגת ביניים, תיקונים, שינויים וכל מה שצריך עד שתרגישו שהגעתם לנחלה. הנוסחה הזאת גורמת להכל לעבוד טוב יותר, לנו כסוכנות דיגיטל מקצועית ואיכותית, ובעיקר לכם שתהיו שלמים עם האתר והנוכחות הדיגיטלית שלכם.",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/f_auto,q_auto,c_limit/v1740676115/LevelUp/31641175_c15_jhtvlh.jpg",
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
        _id: "200",
        header: "Landing page",
        name: "LevelUp - Web Development",
        internalLink: {
          _id: "1",
          href: "levelup-wdlp",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "2",
          href: "https://websites.thelevelupagency.com/",
          text: "צפו באתר",
        },
        desc: "פיתוח דף נחיתה עבור LevelUp, כחלק ממערך השיווק הדיגיטלי של החברה. מטרת הדף היא הצגת שירותי פיתוח האתרים של הסוכנות, תוך שילוב עיצוב נקי וחדשני עם טפסי יצירת קשר לצורך איסוף לידים. הדף פותח בהתאמה אישית לצרכים הפנימיים של החברה, עם דגש על חוויית משתמש, נגישות, והתאמה למובייל.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1742731808/LevelUp/levelup-logo_bwqjf3.png",
          alt: "LevelUp Logo image"
        },
        backgroundColor: "#E6DAF5",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349576/laptop-mockup-left-levelup-wdlp.png",
            alt: "LevelUp right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349576/laptop-mockup-left-levelup-wdlp.png",
            alt: "LevelUp left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743352168/iPhone_15_Mockup_Poster_rf4k4x.png",
            alt: "LevelUp instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349576/phones-mockup-levelup-wdlp.png",
            alt: "LevelUp phones image"
          }
        },
      },
      {
        _id: "201",
        header: "Landing page",
        name: "Yummy - Food Ordering Platform",
        internalLink: {
          _id: "1",
          href: "yummy",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "2",
          href: "https://www.yummy-app.website/",
          text: "צפו באתר",
        },
        desc: "פיתוח פלטפורמת Yummy – מערכת להזמנת אוכל אונליין בשפה האנגלית, המאפשרת למשתמשים לרכוש מזון ממגוון מסעדות בצורה נוחה ומאובטחת. המערכת כוללת אפשרות לתשלום מקוון, יצירת חשבון אישי, והוספת כתובות למשלוח. בנוסף, מסעדות יכולות להירשם ולפרסם את התפריט שלהן ישירות דרך האתר. הפלטפורמה תוכננה עם דגש על ממשק משתמש נגיש, תהליך הזמנה פשוט, ומבנה מותאם למובייל ודסקטופ.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743350514/yummy-full-logo.png",
          alt: "Yummy Logo image"
        },
        backgroundColor: "#FFE5B4",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349085/laptop-mockup-left-yummy.png",
            alt: "Yummy right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349085/laptop-mockup-left-yummy.png",
            alt: "Yummy left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743352168/instagram_Home_screen_Preview_Smartphone_Mockup_Premium_psd_ozqnt4.png",
            alt: "Yummy instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1743349085/phones-mockup-yummy.png",
            alt: "Yummy phones image"
          }
        },
      },
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
          text: "צפו באתר",
        },
        desc: "שיקלי מביאה לכם חוויית עיצוב פנים מרהיבה בהתאמה אישית. אנו מתמחים ביצירת חללים ייחודיים ומעוצבים בקפידה, תוך שילוב סגנון מודרני עם אלמנטים חמים ואישיים. עם צוות מקצועי וקשוב, אנו נהפוך את הבית שלכם למקום חלומי שמרגיש בדיוק כמו שתמיד רציתם.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Shikli_-_Logo_c8egtq.png",
          alt: "Shikli Logo image"
        },
        backgroundColor: "#d3d3d3",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740830716/LevelUp/laptop-mockup-right-shikli_sslrbh.png",
            alt: "Shikli right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740830508/LevelUp/laptop-mockup-left-shikli_r4a3lr.png",
            alt: "Shikli left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326832/MOCKUP_-_PROFILE_PAGE_v7qj1n.png",
            alt: "Shikli instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/t_mockup-crop/v1740824444/LevelUp/phones-mockup-shikli_lomdrj.png",
            alt: "Shikli phones image"
          }
        },
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
          text: "צפו באתר",
        },
        desc: "Bride Boutique הוא המקום שבו כל כלה מוצאת את השמלה המושלמת. עם מבחר רחב של שמלות כלה יוקרתיות, עיצובים מרהיבים ושירות אישי וחם, אנו מלווים כל כלה בדרך ליום הגדול שלה. אצלנו תמצאי את השילוב המושלם בין סטייל, נוחות ואלגנטיות - כי מגיע לך להרגיש כמו נסיכה ביום החתונה שלך.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Bride_Boutique_-_logo_pkvdh1.png",
          alt: "Bride Boutique image"
        },
        backgroundColor: "#fadbdb",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740830716/LevelUp/laptop-mockup-left-shikli_sslrbh.png",
            alt: "Bride Boutique right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740834845/LevelUp/laptop-mockup-left-bride_nkoubt.png",
            alt: "Bride Boutique left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_BRIDE_BOUTIQUE_yjagtn.png",
            alt: "Bride Boutique instagram image"
          },  
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/t_mockup-crop/v1740824444/LevelUp/phones-mockup-bride-boutique_wyi5lq.png",
            alt: "Bride Boutique phones image"
          }
        },
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
          text: "צפו באתר",
        },
        desc: "Let's Garden הופכת כל גינה לפנינת טבע קסומה. אנו מציעים פתרונות גינון יצירתיים, התאמה אישית לכל חלל חיצוני ושירות מקצועי מהלב. בין אם מדובר בעיצוב גינות פרטיות, מרפסות פורחות או שטחים ירוקים לעסקים, אנו כאן כדי להפוך כל חלום ירוק למציאות פורחת.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/Let_s_Garden_-_Logo_nmnfk1.png",
          alt: "Let's Garden image"
        },
        backgroundColor: "#cae3b7",
        mockupImages:{
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740830716/LevelUp/laptop-mockup-left-shikli_sslrbh.png",
            alt: "Let's Garden right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740834845/LevelUp/laptop-mockup-left-lets_bpsybf.png",
            alt: "Let's Garden left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326831/MOCKUP_-_LETS_GARDEN_qcdgki.png",
            alt: "Let's Garden instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/t_mockup-crop/v1740824444/LevelUp/phones-mockup-lets-garden_twe18a.png",
            alt: "Let's Garden phones image"
          }
        },
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
          text: "צפו באתר",
        },
        desc: "SiteTech IL מתמחה ביצירת אתרים מודרניים וחדשניים שמביאים תוצאות. אנו מספקים פתרונות דיגיטליים מתקדמים, תוך דגש על עיצוב מרשים, חוויית משתמש איכותית וקידום אפקטיבי. עם ניסיון עשיר וצוות מקצועי, נבנה עבורכם אתר שמייצג אתכם בצורה מושלמת ומקדם את העסק שלכם קדימה.",
        backgroundColor: "#a4ccd3",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733842719/SiteTech_-_Logo_h9jmvr.png",
          alt: "SiteTech IL image"
        },
        mockupImages:{
          rightLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740830716/LevelUp/laptop-mockup-left-shikli_sslrbh.png",
            alt: "Sitetech right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740834845/LevelUp/laptop-mockup-left-sitetech_fsjneq.png",
            alt: "Sitetech left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_SITETECH_xeiygk.png",
            alt: "Sitetech instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/t_mockup-crop/v1740824444/LevelUp/phones-mockup-sitetech_mwp8mz.png",
            alt: "Sitetech phones image"
          }
        },
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