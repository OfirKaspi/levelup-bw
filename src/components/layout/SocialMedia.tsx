import { CONFIG } from "@/lib/config";
import Image from "next/image"
import Link from "next/link";

const SocialMedia = () => {
  const phoneNumber = CONFIG.WHATSAPP_NUMBER
  const facebookUsername = CONFIG.FACEBOOK_USERNAME
  const instagramUsername = CONFIG.INSTAGRAM_USERNAME
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const facebookUrl = `https://www.facebook.com/${facebookUsername}`;
  const instagramUrl = `https://www.instagram.com/${instagramUsername}`;

  const socials = [
    { name: "facebook", href: facebookUrl },
    { name: "instagram", href: instagramUrl },
    { name: "whatsapp", href: whatsappUrl },
  ]

  return (
    <div className="flex flex-col md:flex-row w-full md:mx-auto lg:mr-auto lg:ml-0 md:w-fit items-center justify-center gap-2 p-5 lg:p-2 border-2 rounded-md">
      <span>השאר מחובר</span>
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