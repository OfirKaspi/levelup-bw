import { Brush, Puzzle, SquareChartGantt } from "lucide-react"
import { Button } from "./ui/button"

const OurServices = () => {
  const data = {
    header: "Our Services",
    desc: "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
    services: [
      {
        icon: <Brush />,
        header: "Design",
        desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        buttonText: "Learn More"
      },
      {
        icon: <Puzzle />,
        header: "Engineering",
        desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        buttonText: "Learn More"
      },
      {
        icon: <SquareChartGantt />,
        header: "Project Management",
        desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        buttonText: "Learn More"
      },
    ]
  }

  return (
    <section>
      <div className="relative -mx-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://res.cloudinary.com/dudwjf2pu/video/upload/v1732805216/6802803_Digital_Animation_Montage_1920x1080_dgh71r.mp4"
            type="video/mp4"
          />
        </video>

        <header className="relative text-center space-y-2 px-5 py-10">
          <h2 className="text-2xl font-bold text-white">{data.header}</h2>
          <p className="text-sm text-gray-200">{data.desc}</p>
        </header>
      </div>

      {data.services.map((service, index) => (
        <div key={service.header} className={`p-5 space-y-5 border-x-2 ${index > 0 && 'border-t-2'}`}>
          <header className="flex items-center gap-2">
            <div className="p-2 border-2 rounded-md text-indigo-500">
              {service.icon}
            </div>
            <h4 className="font-bold">{service.header}</h4>
          </header>
          <p className="text-sm text-muted-foreground">{service.desc}</p>
          <Button className="bg-indigo-500 w-full h-12">{service.buttonText}</Button>
        </div>
      ))}
    </section>
  )
}

export default OurServices