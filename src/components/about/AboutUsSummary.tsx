import Logo from "@/components/common/Logo"
import { AboutUsSummaryType } from "@/types/types"
import LeaveDetailsButton from "../forms/leave-details-form/LeaveDetailsFormDialog"

interface AboutUsSummaryProps {
  data: AboutUsSummaryType
}

const AboutUsSummary = ({ data }: AboutUsSummaryProps) => {
  const { ctaParagraph, paragraph } = data
  return (
    <section className="bg-purple-100 lg:bg-inherit text-center lg:text-start space-y-5 p-5 lg:p-0 my-5 lg:my-24 rounded-lg md:max-w-3xl lg:max-w-5xl md:mx-auto">
      <div className="grid lg:grid-cols-[100px_1fr] gap-5">
        <Logo isTextShow={false} size={100} />
        <div className="space-y-2">
          <h3 className="font-bold lg:text-lg">{paragraph.header}</h3>
          <p className="text-sm lg:text-base">{paragraph.desc}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-purple-200 rounded-lg p-5">
        <h4 className="font-bold lg:text-lg">{ctaParagraph.header}</h4>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-purple-300 rounded-lg gap-5 p-5">
          <p className="text-sm lg:text-base">{ctaParagraph.desc}</p>
          <div className="h-10 w-full lg:w-fit ">
            <LeaveDetailsButton text={ctaParagraph.buttonText} isFancyWrapper={false}/>
          </div>
          {/* <Button bg-purple-800"></Button> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSummary