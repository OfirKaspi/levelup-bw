const OurStory = () => {
  const data = {
    header: "Our Story",
    services: [
      {
        header: "Design",
        desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      },
      {
        header: "Engineering",
        desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      },
      {
        header: "Project Management",
        desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      },
      {
        header: "Collaboration",
        desc: "At LevelUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
      },
      {
        header: "Client-Centric Approach",
        desc: "LevelUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
      },
      {
        header: "Driving Success",
        desc: "With each project, LevelUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out LevelUp for their expertise in creating digital products that delivered tangible results. LevelUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
      },
    ]
  }

  return (
    <section className="border-2 rounded-lg">
      <h2 className="text-2xl lg:text-3xl px-5 py-10 border-b-2">{data.header}</h2>
      <ul className="lg:grid lg:grid-cols-2 lg:px-5">
        {data.services.map((service, index) => (
          <li key={service.header} className={`flex flex-col flex-1 px-5 py-10 space-y-5 justify-between ${index > 0 && "border-t-2 lg:border-none"}`}>
            <div className="space-y-2">
              <header className="flex justify-between">
                <div className="flex items-center gap-2 lg:gap-5 text-purple-800">
                  <span className="font-bold text-5xl">{index < 10 ? `0${index + 1}` : index + 1}</span>
                  <h4 className="font-bold text-2xl lg:text-3xl">{service.header}</h4>
                </div>
              </header>
              <p className="text-sm lg:text-base text-muted-foreground">{service.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurStory