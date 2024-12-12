import { CONFIG } from "@/lib/config";
import Image from "next/image"
import Link from "next/link";

const SocialMedia = () => {
  const phoneNumber = CONFIG.WHATSAPP_NUMBER
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const socials = [
    { name: "facebook", href: "/" },
    { name: "instagram", href: "/" },
    { name: "whatsapp", href: whatsappUrl },
  ]

  return (
    <div className="flex flex-col md:flex-row w-full md:mx-auto lg:ml-auto lg:mr-0 md:w-fit items-center justify-center gap-2 p-5 lg:p-2 border-2 rounded-md">
      <span>Stay Connected</span>
      <ul className="flex gap-2">
        {socials.map((social) => (
          <li
            key={social.name}
            className="border-2 p-2 rounded-md"
          >
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/socialMedia/${social.name}.svg`}
                alt={`${social} logo`}
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMedia