import React from 'react'
import DvcPreview from './DvcPreview'
import { Image } from '@/types/types'

interface ProjectsListProps {
	data: Image[]
}

const DvcList = ({data}:ProjectsListProps) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-10 md:max-w-3xl lg:max-w-5xl md:mx-auto">
			{data.map((image, idx) => (
				<DvcPreview key={idx} image={image} />
			))}
		</div>
	)
}

export default DvcList