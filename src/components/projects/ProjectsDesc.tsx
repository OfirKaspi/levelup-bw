import { CtaParagraph } from "@/types/types"

interface ProjectsDescProps {
  data: CtaParagraph
}

const ProjectsDesc = ({ data }: ProjectsDescProps) => {
  const { header, desc, buttonText } = data
  return (
    <div className="flex flex-col gap-5 py-10 md:max-w-3xl lg:max-w-5xl md:mx-auto">
      <header className="space-y-2">
        <h4 className="font-bold text-2xl lg:text-3xl">{header}</h4>
        <p className="text-sm lg:text-base text-muted-foreground">{desc}</p>
      </header>
      <span className="bg-purple-100 p-2 w-fit rounded-lg">{buttonText}</span>
    </div>
  )
}

export default ProjectsDesc