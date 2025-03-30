import { ExternalLink } from "lucide-react"

interface WebsiteRedirectionProps {
	href: string
	text: string
	isDark?: boolean
}


const WebsiteRedirection = ({ href, text, isDark = false }: WebsiteRedirectionProps) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center justify-center gap-1 transition ease-out py-2 px-4 w-fit rounded-lg   
				${isDark ? "bg-gray-700 hover:bg-gray-800 border-2 border-black text-white" : "bg-purple-300 hover:bg-purple-400"}`
			}
		>
			{text}
			<ExternalLink size={20} />
		</a>)
}

export default WebsiteRedirection