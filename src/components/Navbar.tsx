import { getStrapiURL } from "@/lib/utils";
import Link from "next/link";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";

async function loader() {
  const { fetchData } = await import("@/lib/fetch")

  const path = "/api/global"
  const baseUrl = getStrapiURL()

  const query = qs.stringify({
    populate: {
      topnav: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          link: {
            populate: true,
          },
          cta: {
            populate: true,
          },
        },
      },
    },
  })

  const url = new URL(path, baseUrl)
  url.search = query

  const data = await fetchData(url.href)
  return data
}

interface NavbarData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  topnav: {
    id: number;
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    link: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    cta: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: Record<string, any>;

}

async function Navbar() {
  const data = await loader() as NavbarData

  if (!data || !data.topnav) {
    console.error("No data found or topnav is missing:", data);
    return null;
  }

  const navigation = data.topnav.link
  // const cta = data.topnav.cta
  const logoLink = data.topnav.logoLink

  return (
    <div className="w-full">
      <nav className="flex flex-col gap-2 md:flex-row items-center justify-between">
        {/* Logo  */}
        <Link href={logoLink.href} className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <StrapiImage
            src={logoLink.image.url}
            alt={logoLink.image.alternativeText || logoLink.image.name}
            height={32}
            width={32}
            className="w-8"
          />
          <span>{logoLink.text}</span>
        </Link>

        {/* menu  */}
        <div className="flex">
          <ul className="flex">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.href}
                  className="mx-2 px-2 py-1 rounded-md text-gray-800 no-underline hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar