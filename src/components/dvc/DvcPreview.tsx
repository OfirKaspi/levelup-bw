import React from 'react'
import IphoneContainer from '../common/IphoneContainer'
import AutoScrollMockup from '../common/AutoScrollMockup'
import { Image } from '@/types/types'

interface DvcPreviewProps {
	image: Image
}

const DvcPreview: React.FC<DvcPreviewProps> = ({ image }) => {
	return (
		<IphoneContainer>
			<AutoScrollMockup image={image} />
		</IphoneContainer>)
}

export default DvcPreview