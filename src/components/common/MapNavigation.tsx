"use client"

import { CONFIG } from "@/config/config"
import { redirectToPlatform } from "@/utils/redirectToPlatform"
import Image from "next/image"

const MapNavigation = () => {
	const { lat, lng, contactAddress } = CONFIG

	const buttons = [
		{
			_id: "1",
			link: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
			image: {
				src: "waze.svg",
				alt: "waze icon"
			}
		}, {
			_id: "2",
			link: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contactAddress)}`,
			image: {
				src: "google-maps.svg",
				alt: "google maps icon"
			}
		}
	]

	// IN ORDER FOR IT TO WORK, CHECK THE WEBSITE RESTRICTIONS IN GOOGLE CONSOLE
	return (
		<div className="flex gap-2">
			{buttons.map((button) => (
				<button
					key={button._id}
					onClick={() => redirectToPlatform(button.link)}
					className="relative w-10 h-10"
					aria-label={button.image.alt}
				>
					<Image
						src={`/maps/${button.image.src}`}
						alt={button.image.alt}
						className="object-contain"
						fill
					/>
				</button>
			))}
		</div>
	)
}

export default MapNavigation