import Image from "next/image"

const SocialMedia = () => {
  const socials = [
    "facebook",
    "instagram",
    "whatsapp",
  ]

  return (
    <div className="flex flex-col items-center gap-2 p-5 border-2 rounded-md">
      <span>Stay Connected</span>
      <ul className="flex gap-2">
        {socials.map((social) => (
          <li
            key={social}
            className="border-2 p-2 rounded-md"
          >
            <Image
              src={`/socialMedia/${social}.svg`}
              alt={`${social} logo`}
              width={30}
              height={30}
              className='w-[30px] h-[30px]'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMedia