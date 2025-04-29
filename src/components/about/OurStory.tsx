import { OurStoryType } from "@/types/types"

interface OurStoryProps {
  data: OurStoryType
}

const OurStory = ({ data }: OurStoryProps) => {
  const { header, paragraphs } = data
  return (
    <section className="border-2 rounded-lg md:max-w-3xl lg:max-w-5xl md:mx-auto">
      <h2 className="font-bold text-2xl lg:text-3xl p-5 lg:p-10 border-b-2">{header}</h2>
      <ul className="lg:grid lg:grid-cols-2 lg:px-5">
        {paragraphs.map((paragraph, index) => (
          <li key={paragraph._id} className={`flex flex-col flex-1 p-5 space-y-5 justify-between ${index > 0 && "border-t-2 lg:border-none"}`}>
            <div className="space-y-2">
              <header className="flex justify-between">
                <div className="flex items-center gap-2 lg:gap-5 text-purple-800">
                  <span className="font-bold text-5xl">{index < 9 ? `0${index + 1}` : index + 1}</span>
                  <h3 className="font-bold text-2xl lg:text-3xl">{paragraph.header}</h3>
                </div>
              </header>
              <p className="text-sm lg:text-base text-muted-foreground">{paragraph.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurStory