import { DvcPageType } from "@/types/types";

export const fetchDvcPageData = async () => {
	const data = {
		// CHANGE
		imageSection: {
			_id: "1",
			header: "מה זה כרטיס ביקור דיגיטלי?",
			desc: "כרטיס ביקור דיגיטלי הוא עמוד אינטרנטי שמציג את כל פרטי העסק והמידע שחשוב שהלקוח שלך ידע. העמוד כולל תמונת פרופיל ולוגו, פרטי התקשרות, פירוט השירותים שלכם ונתונים חשובים, קישורים לאתרים ולרשתות חברתיות ועוד מגוון אפשרויות שיניעו לפעולה את הלקוחות שלכם ויציגו אתכם בצורה המקצועית ביותר בעולם דיגיטלי תחרותי.",
			src: "https://res.cloudinary.com/dudwjf2pu/image/upload/f_auto,q_auto,c_limit/v1740676115/LevelUp/31641175_c15_jhtvlh.jpg",
			alt: "Our works image"
		},
		// CHANGE
		dvcDesc: {
			_id: "1",
			header: "תנו לנו להראות לכם איך עושים את זה",
			desc: "החבילות השונות שלנו מתאימות לכל סוגי העסקים - החל מעצמאיים ועסקים קטנים ועד לחברות וארגונים שמעוניינים בכרטיס ביקור דיגיטלי אישי לכל עובד. אתם מוזמנים להתרשם ממגוון הדוגמאות של העסקים שכרטיס הביקור הדיגיטלי עוזר להם בכל רגע נתון לשפר את התדמית העסקית, לייצר נטוורקינג איכותי ולעקוב אחר הפעילות של כל מי שנחשף אליו.",
			buttonText: "כלי שיווקי מתקדם שנכנס לכל ארנק ומוצג בכל מכשיר!",
		},

		// CHANGE
		dvcCta: {
			_id: "1",
			header: "תן לנו להפוך את החלום שלך למציאות בעולם הדיגיטלי",
			desc: "אנחנו כאן כדי להקשיב ולהגשים את החזון שלך. עם הטכנולוגיות המתקדמות ביותר אנחנו נייצר את כרטיס הביקור הדיגיטלי שלך בהתאמה אישית שיספק לך גם נוכחות מקוונת וגם דומיננטיות ומקצועיות בהצגת הכרטיס הפיזי.",
			buttonText: "רוצה לשמוע עוד?",
			src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1740676115/LevelUp/33218313_r27_dubi81.jpg",
			alt: "Call to action image"
		},
		
		dvcList: [
			{ _id: "1", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706599/NFC/screenshots/chef_full_dvc_w5y8ua.png", alt: "Chef Project" },
			{ _id: "2", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706600/NFC/screenshots/construction_full_dvc_wbk2hz.png", alt: "Construction Project" },
			{ _id: "3", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706604/NFC/screenshots/hair-styling_full_dvc_ruw1t4.png", alt: "Hair Styling Project" },
			{ _id: "4", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706606/NFC/screenshots/mackup_full_dvc_uew2oc.png", alt: "Makeup Project" },
			{ _id: "5", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706607/NFC/screenshots/home-interior_full_dvc_oyw2mr.png", alt: "Home Interior Project" },
			{ _id: "6", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706608/NFC/screenshots/mortgage_full_dvc_fdb62j.png", alt: "Mortgage Project" },
			{ _id: "7", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706621/NFC/screenshots/photographer_full_dvc_ghqd1c.png", alt: "Photographer Project" },
			{ _id: "8", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706622/NFC/screenshots/accountant_full_dvc_wfuf5f.png", alt: "Accountant Project" },
			{ _id: "9", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706624/NFC/screenshots/band_full_dvc_mesvov.png", alt: "Band Project" },
			{ _id: "10", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706625/NFC/screenshots/barber_full_dvc_e9fmqv.png", alt: "Barber Project" },
			{ _id: "11", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706588/NFC/screenshots/fitness_full_dvc_gxcheq.png", alt: "Fitness Project" },
			{ _id: "12", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706589/NFC/screenshots/lawyer_full_dvc_csn9pw.png", alt: "Lawyer Project" },
			{ _id: "13", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706589/NFC/screenshots/lak-gel_full_dvc_wlo4wy.png", alt: "Lak Gel Project" },
			{ _id: "14", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706595/NFC/screenshots/sheahava_nafhsi_full_dvc_qfiedp.png", alt: "Sheahava Nafhsi Project" },
			{ _id: "15", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706590/NFC/screenshots/liron-social_full_dvc_wglwmj.png", alt: "Liron Social Project" },
			{ _id: "16", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706589/NFC/screenshots/level-up_full_dvc_l29iyx.png", alt: "Level Up Project" },
			{ _id: "17", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706591/NFC/screenshots/ofir_full_dvc_pmeqgj.png", alt: "Ofir Project" },
			{ _id: "18", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706592/NFC/screenshots/amit_full_dvc_glc8nr.png", alt: "Amit Project" },
			{ _id: "19", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706593/NFC/screenshots/ben_full_dvc_k3dqa2.png", alt: "Ben Project" },
			{ _id: "20", src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1757706594/NFC/screenshots/elyasaf_full_dvc_ljaxjv.png", alt: "Elyasaf Project" },
		]
	};

	return data as DvcPageType;
};