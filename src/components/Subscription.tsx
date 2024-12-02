import ImageBg from "@/components/ImageBg"

const Subscription = () => {
  const data = {
    header: "Thank you for your Interest in LevelUp.",
    desc: "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_4:3/v1732882165/5617154_2920891_bspoyl.jpg",
    buttonText: "Start Project",
    questions: [
      {
        header: "What services does LevelUp provide?",
        desc: "LevelUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
      },
      {
        header: "How long does it take to complete a project?",
        desc: "The timeline for completing a project depends on its complexity and scope. Typically, smaller projects like basic websites can take 2-4 weeks, while larger projects like custom applications may take 3-6 months. We work closely with clients to set realistic deadlines.",
      },
      {
        header: "What industries do you specialize in?",
        desc: "We cater to a variety of industries, including e-commerce, healthcare, education, finance, and startups. Our team has experience building solutions tailored to the unique needs of different business sectors.",
      },
      {
        header: "Can you help redesign an existing website or app?",
        desc: "Yes! We specialize in redesigning websites and apps to improve usability, performance, and aesthetics. Whether it's a minor update or a complete overhaul, our team can help create a fresh and modern look.",
      },
      {
        header: "What is your pricing structure?",
        desc: "Our pricing depends on the project size, scope, and requirements. We offer flexible pricing models, including hourly rates for smaller tasks and fixed rates for larger projects. Contact us for a custom quote.",
      },
    ]
  }

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} buttonText={data.buttonText} />
    </section>
  )
}

export default Subscription