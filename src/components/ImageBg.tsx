import Image from "next/image"
import { Button } from "./ui/button"
import Favicon from "@/assets/favicon.svg"

type Props = {
  src: string
  header: string
  desc: string
  buttonText?: string
}

const ImageBg = ({ desc, header, src, buttonText }: Props) => {
  return (
    <div className="relative -mx-5">
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
        src={src}
        alt="our services image"
        width='500'
        height='500'
      />
      <div className="relative flex flex-col text-center items-center  space-y-5 px-5 py-14">
        {buttonText && (
          <div className="bg-white rounded-lg opacity-90">
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center"
              src={Favicon}
              alt="Level Up image"
              width='60'
              height='60'
            />
          </div>
        )}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{header}</h2>
          <p className="text-sm text-white">{desc}</p>
        </div>
        {buttonText && (
          <Button className="bg-purple-800 text-white p-6 border-2 border-white ">{buttonText}</Button>
        )}
      </div>
    </div>
  )
}

export default ImageBg