import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import LeaveDetailsForm from "@/components/forms/LeaveDetailsForm"

interface LeaveDetailsProps {
  text: string
  isFancyWrapper?: boolean
  isDark?: boolean
}

const LeaveDetailsButton = ({ text, isFancyWrapper = true, isDark = true }: LeaveDetailsProps) => {
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white"

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isFancyWrapper ? (
          <button
            className="relative inline-flex group"
            aria-label={text}
          >
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
            <span
              className={`relative z-20 h-10 px-4 transition-all duration-200 rounded-md flex items-center justify-center ${style}`}
            >
              {text}
            </span>
          </button>
        ) : (
          <Button
            className="bg-purple-800 w-full h-10"
            aria-label={text}
          >
            {text}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[350px] sm:max-w-[450px] rounded-lg">
        <LeaveDetailsForm />
      </DialogContent>
    </Dialog>
  )
}

export default LeaveDetailsButton