import { Website } from "@/types/types"
import WebsitePreview from "@/components/websites/WebsitePreview"

interface WebsitesListProps {
  data: Website[]
}

const WebsitesList = ({ data: websites }: WebsitesListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pb-10 md:max-w-3xl lg:max-w-5xl md:mx-auto">
      {websites.map((website) => (
        <WebsitePreview key={website._id} website={website} />
      ))}
    </ul>
  )
}

export default WebsitesList