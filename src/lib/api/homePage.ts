export const fetchHomePageData = async () => {
  const data = {
    hero: {
      _id: "1",
      header: "A Digital Product Studio",
      subHeader: "that will work",
      image: {
        _id: "1",
        src: "https://res.cloudinary.com/dudwjf2pu/video/upload/v1732805721/7020045_Abstract_Background_1920x1080_wfhrkz.mp4",
        alt: "Hero video",
      },
      buttonText1: "Contact Us",
      buttonText2: "Our Works",
    },
    subscription: {
      _id: "1",
      header: "Thank you for your Interest in LevelUp.",
      desc: "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.",
      buttonText: "Start Project",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_4:3/v1732882165/5617154_2920891_bspoyl.jpg",
      alt: "Subscription section image"
    },
    questions: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "Frequently Asked Questions",
        desc: "Still you have any questions? Contact our Team via support@levelup.com",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/4865684_10584_vdqdn9.jpg",
        alt: "Question section image",
      },
      paragraphs: [
        {
          _id: "1",
          header: "What services does LevelUp provide?",
          desc: "LevelUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
        },
        {
          _id: "2",
          header: "How long does it take to complete a project?",
          desc: "The timeline for completing a project depends on its complexity and scope. Typically, smaller projects like basic websites can take 2-4 weeks, while larger projects like custom applications may take 3-6 months. We work closely with clients to set realistic deadlines.",
        },
        {
          _id: "3",
          header: "What industries do you specialize in?",
          desc: "We cater to a variety of industries, including e-commerce, healthcare, education, finance, and startups. Our team has experience building solutions tailored to the unique needs of different business sectors.",
        },
        {
          _id: "4",
          header: "Can you help redesign an existing website or app?",
          desc: "Yes! We specialize in redesigning websites and apps to improve usability, performance, and aesthetics. Whether it's a minor update or a complete overhaul, our team can help create a fresh and modern look.",
        },
        {
          _id: "5",
          header: "What is your pricing structure?",
          desc: "Our pricing depends on the project size, scope, and requirements. We offer flexible pricing models, including hourly rates for smaller tasks and fixed rates for larger projects. Contact us for a custom quote.",
        },
      ]
    },
    clientReviews: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "What our Clients say About us",
        desc: "At LevelUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/5513846_2862210_lntbom.jpg",
        alt: "Our clients image",
      },
      reviews: [
        {
          _id: "1",
          header: "LevelUp has been Instrumental in Transforming our Online Presence. ",
          desc: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
          name: "Ashley Bennet",
          role: "CEO of Chic Boutique",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/896_vnoji2.jpg",
          alt: "Ashley Bennet Photo",
          link: {
            _id: "1",
            text: "Show Project",
            href: "/projects/shikli",
          }
        },
        {
          _id: "2",
          header: "Working with LevelUp was a breeze.",
          desc: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. LevelUp is a trusted partner we highly recommend.",
          name: "John Smith",
          role: "Founder of HungryBites",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/7187_qwf50t.jpg",
          alt: "John Smith Photo",
          link: {
            _id: "2",
            text: "Show Project",
            href: "/projects/sitetech",
          }
        },
        {
          _id: "3",
          header: "LevelUp developed a comprehensive booking and reservation system for our event management company",
          desc: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
          name: "Sarah Cohen",
          role: "CEO of EventMaster",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877999/15511_mrizjo.jpg",
          alt: "Sarah Cohen Photo",
          link: {
            _id: "3",
            text: "Show Project",
            href: "/projects/bride-boutique",
          }
        },
        {
          _id: "4",
          header: "ProTech Solutions turned to LevelUp to automate our workflow",
          desc: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. LevelUp's expertise and professionalism have made them a trusted technology partner.",
          name: "Robert Hurry",
          role: "COO of ProTech Solutions",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877998/12127_ryy3yp.jpg",
          alt: "Robert Hurry Photo",
          link: {
            _id: "4",
            text: "Show Project",
            href: "/projects/lets-garden",
          }
        },
      ]
    },
    techs: [
      {
        _id: "1",
        name: "Figma",

        alt: "Figma Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/figma_ihd6ko.svg"
      },
      {
        _id: "2",
        name: "Google Analytics",
        alt: "Google Analytics Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/google-analytics_ecg3yw.svg"
      },
      {
        _id: "3",
        name: "Mailchimp",
        alt: "Mailchimp Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/mailchimp_ekhmce.svg"
      },
      {
        _id: "4",
        name: "Monday",
        alt: "Monday Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/monday_ppefry.svg"
      },
      {
        _id: "5",
        name: "Motion",
        alt: "Motion Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/motion_xuxkqu.svg"
      },
      {
        _id: "6",
        name: "NextJS",
        alt: "NextJS Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/next_mf9asa.svg"
      },
      {
        _id: "7",
        name: "Strapi",
        alt: "Strapi Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/strapi_hjhv5t.svg"
      },
      {
        _id: "8",
        name: "Tailwind",
        alt: "Tailwind Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/tailwind_ho2k5z.svg"
      },
      {
        _id: "9",
        name: "Zapier",
        alt: "Zapier Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/zapier_ochkxu.svg"
      },
    ],
    ourServices: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "Our Services",
        desc: "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
        alt: "Our services image",
      },
      services: [
        {
          _id: "1",
          header: "Design",
          desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
          buttonText: "Learn More",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766524/brush_1_tcsr8v.svg",
          alt: "Design icon`",
        },
        {
          _id: "2",
          header: "Engineering",
          desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
          buttonText: "Learn More",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766525/puzzle_1_t5nv0s.svg",
          alt: "Engineering icon",
        },
        {
          _id: "3",
          header: "Project Management",
          desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
          buttonText: "Learn More",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766525/square-chart-gantt_1_jml7ug.svg",
          alt: "Project Management icon",
        },
      ]
    },
  }

  return data;
};
