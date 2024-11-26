import Image from "next/image";
import Link from "next/link";

async function Navbar() {

  const logoLink = { text: "Home", href: "/", logo: '/favicon.svg', alt: "digital agency logo", title: "Digital Agency" }
  const links = [
    logoLink,
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
  ]

  return (
    <div className="w-full">
      <nav className="flex flex-col gap-2 md:flex-row items-center justify-between">
        {/* Logo  */}
        <Link href={logoLink.href} className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <Image
            src={logoLink.logo}
            alt={logoLink.alt}
            height={32}
            width={32}
            className="w-8"
          />
          <span>{logoLink.title}</span>
        </Link>

        {/* menu  */}
        <ul className="flex">
          {links.map((menu, index) => (
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
      </nav>
    </div>

  );
}

export default Navbar