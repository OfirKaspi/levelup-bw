import { Tech } from '@/types/types'
import TechsList from '@/components/home/TechsList'

interface OurTechsProps {
  data: Tech[]
}

const OurTechs = ({ data: techs }: OurTechsProps) => {
  return (
    <section className='relative max-w-screen-xl mx-auto'>
      <span className='absolute top-[-20px] left-1/2 text-sm md:text-base xl:text-lg transform -translate-x-1/2 border-[1px] rounded-full py-2 px-4 z-10 bg-white font-bold'>הטכנולוגיות שלנו</span>
      <TechsList techs={techs} />
    </section >
  )
}

export default OurTechs