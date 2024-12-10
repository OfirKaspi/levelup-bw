import { Tech } from "@/types/types"
import TechPreview from "./TechPreview"

interface TechListProps {
  techs: Tech[]
}

const TechsList = ({ techs }: TechListProps) => {
  return (
    <ul className="grid grid-cols-3 gap-5 pt-10 pb-5 md:pb-10 md:flex md:justify-between">
      {techs.map((tech) => (
        <TechPreview key={tech._id} tech={tech} />
      ))}
    </ul>
  )
}

export default TechsList