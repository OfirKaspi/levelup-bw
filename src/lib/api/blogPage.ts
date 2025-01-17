import { Article, BlogPageType } from "@/types/types";

export const fetchBlogPageData = () => {
  const data = {
    imageSection: {
      _id: "1",
      header: "תובנות והשראה",
      desc: "צללו לאוסף הבלוגים שלנו שבו יצירתיות פוגשת אסטרטגיה. מחדשות בעולם הפיתוח ועד טיפים לשיווק ועיצוב, גלו תובנות שיתנו לכם השראה במסע שלכם בעולם הדיגיטלי. הישארו מעודכנים ומלאי השראה!",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
      alt: "תמונה לבלוג"
    },
    blogDesc: {
      _id: "1",
      header: "חקור את הבלוג שלנו",
      desc: "צללו לעולם מלא ידע על שיווק דיגיטלי, עם תובנות, טרנדים ואסטרטגיות שיעזרו לכם לשדרג את הנוכחות שלכם ברשת.",
      buttonText: "בדקו את ארבעת המאמרים האחרונים שלנו:",
    },
    articlesList: [
      {
        _id: "1",
        header: "עתיד השיווק הדיגיטלי: טרנדים לשנת 2024",
        desc: "גלו את הטרנדים החדשניים שעומדים לעצב את עולם השיווק הדיגיטלי וכיצד תוכלו להישאר צעד אחד קדימה.",
        href: "the-future-of-digital-marketing",
        image: {
          _id: "1",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024021/2150169364_foctbd.jpg",
          alt: "אילוסטרציה של טרנדים בשיווק דיגיטלי",
        },
        content: {
          _id: "1",
          firstParagraph: "כשאנו נכנסים לשנת 2024, תעשיית השיווק הדיגיטלי ממשיכה להתפתח בקצב מסחרר. מעולם הקמפיינים מבוססי בינה מלאכותית ועד להתאמה אישית מתקדמת, עסקים צריכים להסתגל במהירות כדי להישאר תחרותיים.",
          secondParagraph: "במאמר זה נעמיק בטרנדים מרכזיים כמו עליית החיפושים הקוליים, חשיבות המיתוג הקיימותי וכיצד לנצל ניתוחי נתונים לשיפור ה-ROI.",
          image: {
            _id: "1",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "גרף של טרנדים בשיווק",
          },
        },
      },
      {
        _id: "2",
        header: "שליטה ברשתות החברתיות: אסטרטגיות למעורבות מרבית",
        desc: "למדו אסטרטגיות מוכחות להגדלת המעורבות ברשתות החברתיות ולשיפור הנוכחות שלכם ברשת.",
        href: "mastering-social-skills",
        image: {
          _id: "2",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1734024021/5453989_2805145_wdji8i.jpg",
          alt: "אילוסטרציה של מעורבות ברשתות החברתיות",
        },
        content: {
          _id: "2",
          firstParagraph: "הרשתות החברתיות הן הלב הפועם של השיווק הדיגיטלי, ומציעות הזדמנויות בלתי רגילות להתחבר לקהל שלכם.",
          secondParagraph: "מאמר זה מכסה טיפים מעשיים, החל מהתאמת לוח הזמנים לפרסום ועד ליצירת תוכן ויזואלי מרתק שמתחבר לעוקבים שלכם.",
          image: {
            _id: "2",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "פוסטים מרתקים ברשתות החברתיות",
          },
        },
      },
      {
        _id: "3",
        header: "סודות ה-SEO: איך לשלוט בדירוגי החיפוש ב-2024",
        desc: "גלו את הטכניקות העדכניות ביותר שיעזרו לאתר שלכם לעלות בדירוג ולמשוך תנועה אורגנית.",
        href: "seo-secrets",
        image: {
          _id: "3",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024021/127578_jauppn.jpg",
          alt: "אילוסטרציה של גרף SEO",
        },
        content: {
          _id: "3",
          firstParagraph: "אופטימיזציה למנועי חיפוש נשארת אבן יסוד להצלחה בשיווק דיגיטלי. אך הכללים משתנים כל הזמן.",
          secondParagraph: "גלו כיצד להתאים לחיפושים קוליים, לשפר את מהירות טעינת האתר וליצור תוכן שאהוב על מנועי החיפוש והמשתמשים.",
          image: {
            _id: "3",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "תהליך אופטימיזציה למנועי חיפוש",
          },
        },
      },
      {
        _id: "4",
        header: "אסטרטגיות שיווק תוכן שעובדות באמת",
        desc: "למדו כיצד ליצור תוכן שמוביל תנועה, מייצר לידים ובונה נאמנות למותג.",
        href: "content-marketing-strategy",
        image: {
          _id: "4",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1734024020/133729_bhi8hk.jpg",
          alt: "אילוסטרציה של אסטרטגיית שיווק תוכן",
        },
        content: {
          _id: "4",
          firstParagraph: "תוכן הוא המלך, אך יצירת תוכן משפיע דורשת יותר מכישרון כתיבה. זה עניין של אסטרטגיה.",
          secondParagraph: "מאמר זה בוחן כיצד לזהות את צרכי הקהל שלכם, ליצור תוכן ממוקד ערך ולהפיץ אותו בצורה אפקטיבית בערוצים השונים.",
          image: {
            _id: "4",
            src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
            alt: "יצירת תוכן אסטרטגי",
          },
        },
      },
    ]
  };

  return data as BlogPageType;
};

export const fetchArticleData = async (name: string) => {
  const { articlesList } = await fetchBlogPageData();
  const article = articlesList.find((a) => a.href === name);
  return article as Article;
};
