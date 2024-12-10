export const fetchAboutPageData = async () => {
  const data = {
    aboutUs: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "About Us",
        desc: "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
        alt: "About Us image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
      },
      paragraph: {
        _id: "1",
        header: "About LevelUp",
        desc: "SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
      },
    },
    ourStory: {
      _id: "1",
      header: "Our Story",
      paragraphs: [
        {
          _id: "1",
          header: "Design",
          desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        },
        {
          _id: "2",
          header: "Engineering",
          desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        },
        {
          _id: "3",
          header: "Project Management",
          desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        },
        {
          _id: "4",
          header: "Collaboration",
          desc: "At LevelUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
        },
        {
          _id: "5",
          header: "Client-Centric Approach",
          desc: "LevelUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
        },
        {
          _id: "6",
          header: "Driving Success",
          desc: "With each project, LevelUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out LevelUp for their expertise in creating digital products that delivered tangible results. LevelUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
        },
      ]
    },
    aboutUsSummary: {
      _id: "1",
      paragraph: {
        _id: "1",
        header: "Today, LevelUp Continues to Thrive as a Leading Digital Product Agency...",
        desc: "Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.",
      },
      ctaParagraph: {
        _id: "1",
        header: "Welcome to LevelUp",
        desc: "Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.",
        buttonText: "Start Project",
      }
    }
  }

  return data
};
