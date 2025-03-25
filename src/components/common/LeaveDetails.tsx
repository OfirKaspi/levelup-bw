import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import LeaveDetailsForm from "@/components/forms/LeaveDetailsForm"

interface LeaveDetailsProps {
  children: React.ReactNode
  isFancyButton?: boolean
  isDark?: boolean
}

const LeaveDetailsButton = ({ children, isFancyButton = true, isDark = true }: LeaveDetailsProps) => {
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white"

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isFancyButton ? (
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
            <button className={`relative z-20 h-10 px-4 transition-all duration-200 rounded-md ${style}`}>
              {children}
            </button>
          </div>
        ) : (
          <Button className="bg-purple-800 w-full h-10">{children}</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[350px] sm:max-w-[450px] rounded-lg">
        <LeaveDetailsForm/>
      </DialogContent>
    </Dialog>
  )
}

export default LeaveDetailsButton