import { fetchWebsiteData } from "@/lib/api/websitesPage";
import Image from "next/image";
import WebsiteRedirection from "@/components/common/WebsiteRedirection";

const WebsitePage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = await params
  const { name } = await resolvedParams
  const website = await fetchWebsiteData(name)

  if (!website) {
    return <div>Website do not found</div>
  }

  return (
    <section className="relative w-screen -mx-5 -mt-20 pt-20" style={{ backgroundColor: website.backgroundColor }}>
      <section className="flex flex-col items-center gap-5 p-5 md:flex-row-reverse md:gap-0 md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <div className="relative flex-1 max-w-[250px] md:max-w-full">
          <Image
            src={website.logo.src}
            alt={website.logo.alt}
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 max-w-[400px] md:max-w-full">
          <Image
            src={website.mockupImages.leftLaptop.src}
            alt={website.mockupImages.leftLaptop.alt}
            height={500}
            width={500}
            className="object-contain"
          />
        </div>
      </section>
      <section className="p-5 grid gap-5 md:grid-cols-2 md:items-center md:text-center md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <div className="flex flex-col items-center space-y-5">
          <header className="space-y-2">
            <h6 className="font-bold text-lg md:text-2xl">{website.name}</h6>
            <p className="md:text-lg">{website.desc}</p>
          </header>
          <WebsiteRedirection
            text={website.externalLink.text}
            href={website.externalLink.href}
            isDark={true}
          />
        </div>
        <div className="relative max-w-[500px] mx-auto">
          <Image
            src={website.mockupImages.phones.src}
            alt={website.mockupImages.phones.alt}
            width={1200}
            height={1600}
            className="rounded-lg object-contain"
          />
        </div>
      </section>
    </section>
  )
}

export default WebsitePage