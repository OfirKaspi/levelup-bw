import { QuestionsType } from "@/types/types"
import ImageSection from "@/components/common/ImageSection"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

interface QuestionsProps {
  data: QuestionsType
}


const Questions = ({ data }: QuestionsProps) => {
  const { imageSection, paragraphs: questions } = data
  return (
    <>
      <ImageSection data={imageSection} />
      <section className="max-w-screen-xl mx-auto">
        <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5 place-items-start">
          {questions.map((question) => (
            <AccordionItem key={question._id} value={question._id} className="w-full">
              <AccordionTrigger className="text-purple-800 font-bold">{question.header}</AccordionTrigger>
              <AccordionContent>{question.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  )
}

export default Questions