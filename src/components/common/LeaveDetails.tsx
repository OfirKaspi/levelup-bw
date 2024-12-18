import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import LeaveDetailsForm from "@/components/forms/LeaveDetailsForm"

interface LeaveDetailsProps {
  children: React.ReactNode
  isFancyButton?: boolean
  isDark?: boolean
}

const LeaveDetailsButton = ({ children, isFancyButton = true, isDark = true }: LeaveDetailsProps) => {
  const data = {
    _id: "1",
    header: "נעים להכיר!",
    desc: "השאירו פרטים לשיחת ייעוץ בחינם - תספרו לנו מה העסק שלכם צריך ותקבלו טיפים שתוכלו ליישם מיד",
    buttonText: "לחץ כאן לשליחה",
    loadingButtonText: "שולח...",
    successText: "איזה כיף! אנחנו נחזור אליך ב 24 שעות הקרובות"
  }
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white"

  if (!data) {
    return <div>Failed to load Leave details content. Please try again later.</div>;
  }

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
        <DialogHeader className="relative">
          <DialogTitle className="text-center">{data.header}</DialogTitle>
          <DialogDescription className="text-right">
            {data.desc}
          </DialogDescription>
        </DialogHeader>
        <LeaveDetailsForm buttonText={data.buttonText} loadingButtonText={data.loadingButtonText} successText={data.successText} />
      </DialogContent>
    </Dialog>
  )
}

export default LeaveDetailsButton