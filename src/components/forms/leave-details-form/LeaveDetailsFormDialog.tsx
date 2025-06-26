"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import LeaveDetailsForm from "@/components/forms/leave-details-form/LeaveDetailsForm"
import LeaveDetailsFormHeader from "@/components/forms/leave-details-form/LeaveDetailsFormHeader"
import { trackEvent } from "@/lib/gtag"

interface LeaveDetailsProps {
  text: string
  isFancyWrapper?: boolean
  isDark?: boolean
}

const LeaveDetailsDialog = ({ text, isFancyWrapper = true, isDark = false }: LeaveDetailsProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white"

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    
    if (open) {
      trackEvent({
        action: "click",
        category: "Dialog",
        label: "Leave Details Form Opened",
      });
    }

    if (!open) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {isFancyWrapper ? (
            <button className="relative inline-flex group" aria-label={text}>
            {/* Glowing background effect */}
            <div
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300
                 opacity-70 blur-lg transition-all duration-1000
                 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            />
            {/* Gradient border */}
            <div className="relative z-20 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
              {/* Inner button content */}
              <div
              className={`h-10 px-4 flex items-center justify-center font-bold rounded-[10px] transition-all duration-200 ${style}`}
              >
              {text}
              </div>
            </div>
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
        <LeaveDetailsFormHeader isSuccess={isSuccess} />
        <LeaveDetailsForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      </DialogContent>
    </Dialog >
  )
}

export default LeaveDetailsDialog