import { Review } from "@/types/types"
import ClientReviewPreview from "@/components/home/ClientReviewPreview"

interface ClientReviewsListProps {
  reviews: Review[]
}

const ClientReviewsList = ({ reviews }: ClientReviewsListProps) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
      {reviews.map((review) => (
        <ClientReviewPreview key={review._id} review={review} />
      ))}
    </ul>
  )
}

export default ClientReviewsList