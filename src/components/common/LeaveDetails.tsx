/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import FancyButton from "@/components/common/FancyButton"

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
          // CHECK WHY THE FANCY BUTTON BLOCK THE DIALOG CONTENT TO POP
          // <FancyButton isDark={isDark}>{children}</FancyButton>
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
        <DialogHeader>
          <DialogTitle>Leave Details</DialogTitle>
          <DialogDescription>
            Place you details down below and we'll be in touch very soon!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full name
            </Label>
            <Input
              id="fullname"
              placeholder="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="050..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LeaveDetailsButton