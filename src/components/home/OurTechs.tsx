import { Tech } from '@/types/types'
import TechsList from './TechsList'

interface OurTechsProps {
  data: Tech[]
}

const OurTechs = ({ data: techs }: OurTechsProps) => {
  return (
    <section className='relative'>
      <span className='absolute top-[-20px] left-1/2 text-sm transform -translate-x-1/2 border-2 rounded-full py-2 px-4 z-10 bg-white'>הטכנולוגיות שלנו</span>
      <TechsList techs={techs} />
    </section >
  )
}

export default OurTechs