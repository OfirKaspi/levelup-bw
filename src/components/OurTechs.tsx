import Image from 'next/image'

const OurTechs = () => {
  const techs = [
    "figma",
    "google-analytics",
    "mailchimp",
    "monday",
    "motion",
    "next",
    "strapi",
    "tailwind",
    "zapier",
  ]

  return (
    <section className='relative'>
      <span className='absolute top-[-20px] left-1/2 text-sm transform -translate-x-1/2 border-2 rounded-full py-2 px-4 z-10 bg-white'>Our Technologies</span>
      <ul className='grid grid-cols-3 pt-6 pb-3'>
        {techs.map((tech) => (
          <li
            key={tech}
            className='flex items-center justify-center h-[100px]'
          >
            <Image
              src={`/techs/${tech}.svg`}
              alt={`${tech} logo`}
              width={55}
              height={55}
              className='w-[55px] h-[55px]'
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurTechs