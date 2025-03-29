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
        <div className="text-sm lg:text-base text-muted-foreground">
          <p>{desc}</p>
          <p>{buttonText}</p>
        </div>
      </header>
    </div>
  )
}

export default ProjectsDesc