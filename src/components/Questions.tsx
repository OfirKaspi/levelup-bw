import ImageBg from "./ImageBg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Questions = () => {
  const data = {
    header: "Frequently Asked Questions",
    desc: "Still you have any questions? Contact our Team via support@levelup.com",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/4865684_10584_vdqdn9.jpg",
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

  const lastQuestion = data.questions.length - 1

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} />
      <Accordion type="multiple" className="py-5 space-y-5">
        {data.questions.map((question, index) => (
          <AccordionItem key={index} value={(index).toString()} className={`${index === lastQuestion && 'border-b-0'}`}>
            <AccordionTrigger className="text-purple-800 font-bold">{question.header}</AccordionTrigger>
            <AccordionContent>{question.desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Questions