import ImageSection from "@/components/common/ImageSection"
import { ImageSectionType } from "@/types/types"

interface SubscriptionProps {
  data: ImageSectionType
}

const Subscription = ({ data }: SubscriptionProps) => {
  return (
    <>
      <ImageSection data={data} />
    </>
  )
}

export default Subscription