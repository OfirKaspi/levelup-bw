import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"

const AboutUsSummary = () => {
  const data = {
    header: "Today, LevelUp Continues to Thrive as a Leading Digital Product Agency...",
    desc: "Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.",
    cta: {
      header: "Welcome to LevelUp",
      desc: "Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.",
      buttonText: "Start Project",
    }
  }

  return (
    <section className="bg-purple-100 lg:bg-inherit text-center lg:text-left space-y-5 p-5 lg:p-0 my-5 lg:my-24 rounded-lg">
      <div className="lg:grid lg:grid-cols-[100px_1fr] lg:gap-5">
        <Logo isTextShow={false} size={100} />
        <div className="space-y-2">
          <h4 className="font-bold lg:text-lg">{data.header}</h4>
          <p className="text-sm lg:text-base text-muted-foreground">{data.desc}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-purple-200 rounded-lg p-5">
        <h5 className="font-bold lg:text-lg">{data.cta.header}</h5>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-purple-300 rounded-lg gap-5 p-5">
          <p className="text-sm lg:text-base">{data.cta.desc}</p>
          <Button className="h-10 w-full lg:w-fit bg-purple-800">{data.cta.buttonText}</Button>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSummary