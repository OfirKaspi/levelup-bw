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
        _id: "2000",
        header: "Buisiness Website",
        name: "Sphog | סדנאות טרריום",
        internalLink: {
          _id: "1",
          href: "sphog",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "2",
          href: "https://sphogmoss.com/",
          text: "צפו באתר",
        },
        desc: "פיתוח אתר עבור ספוג סדנאות טרריום, המשלב עיצוב ייחודי עם חוויית משתמש יוצאת דופן. האתר מציג את שירותי הסדנאות, כולל מידע מפורט, גלריית תמונות, וטפסי יצירת קשר מותאמים אישית. תהליך הבנייה כלל התאמה אישית לצרכים של ספוג, תוך דגש על נגישות, עיצוב מודרני והתאמה למובייל.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1747765974/sphog/1_kawtgf.png",
          alt: "Sphog Logo image"
        },
        backgroundColor: "#d6f5e3",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https:/res.cloudinary.com/dudwjf2pu/image/upload/v1743349576/laptop-mockup-left-levelup-wdlp.png",
            alt: "Sphog right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1751023485/LevelUp/freepik__background__29597_n9ihbg.png",
            alt: "Sphog left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1750500843/sphog/og_image_y1cltf.jpg",
            alt: "Sphog instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1751023485/LevelUp/iPhone_15_Mockup_Perspective_bufwje.png",
            alt: "Sphog phones image"
          }
        },
      },
      {
        _id: "2001",
        header: "Digital Business Card",
        name: "שאהבה נפשי | הפקות הצעות נישואין",
        internalLink: {
          _id: "1",
          href: "sheahava-nafshi",
          text: "לדף תדמית",
        },
        externalLink: {
          _id: "2",
          href: "https://nfc.thelevelupagency.com/sheahava-nafshi",
          text: "צפו באתר",
        },
        desc: "כרטיס ביקור דיגיטלי אינטראקטיבי שפותח עבור חברת הפקות המתמחה ביצירת רגעים בלתי נשכחים – החל מהצעות נישואין מושקעות ועד לטקסי מקווה ואירועים מיוחדים. האתר כולל עיצוב רומנטי ומעודן, מותאם לכל סוגי המכשירים, ומציע חוויית משתמש חלקה ונעימה. בנוסף, הכרטיס משולב בטכנולוגיית NFC חכמה, המאפשרת גישה מיידית ונוחה דרך נגיעה פשוטה – אידיאלי לשיתוף מהיר והפנייה ישירה.",
        logo: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/e_background_removal/f_png/v1750004213/NFC/sheahava-nafshi/hirqsmtrmrrat4jhtena_dg5tiz.webp",
          alt: "Sheahava Nafshi Logo image"
        },
        backgroundColor: "#fce4ec",
        mockupImages: {
          rightLaptop: {
            _id: "1",
            src: "https:/res.cloudinary.com/dudwjf2pu/image/upload/v1743349576/laptop-mockup-left-levelup-wdlp.png",
            alt: "Sheahava Nafshi right laptop image"
          },
          leftLaptop: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1751104838/NFC/sheahava-nafshi/laptop-sn_ck4e9r.webp",
            alt: "Sheahava Nafshi left laptop image"
          },
          instagram: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1751104841/NFC/sheahava-nafshi/instagram-sn_bxv1gf.webp",
            alt: "Sheahava Nafshi instagram image"
          },
          phones: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1751104836/NFC/sheahava-nafshi/iphones-sn_sokt51.webp",
            alt: "Sheahava Nafshi phones image"
          }
        },
      },
      {
        _id: "201",
        header: "Landing page",
        name: "Yummy | פלטפורמת הזמנת אוכל אונליין",
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
        name: "Shikli | עיצוב פנים",
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
        name: "Bride Boutique | שמלות כלה יוקרתיות",
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
        name: "Let's Garden | גינון מקצועי",
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
        mockupImages: {
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
        name: "SiteTech IL | פיתוח אתרים",
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
        mockupImages: {
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