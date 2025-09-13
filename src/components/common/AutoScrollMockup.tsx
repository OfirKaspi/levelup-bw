"use client"

import OptimizedImage from '@/components/common/OptimizedImage'
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Image } from '@/types/types'

interface AutoScrollMockupProps {
    image: Image
}

const AutoScrollMockup = ({ image }: AutoScrollMockupProps) => {
    const [isScrolling, setIsScrolling] = useState(false)
    
    // Motion values for smooth tracking
    const scrollProgress = useMotionValue(0) // 0 = top, 1 = bottom
    const yPosition = useTransform(scrollProgress, [0, 1], ['0%', '-75%'])
    
    // Consistent scroll speed (progress units per second)
    const scrollSpeed = 0.067 // Takes ~15 seconds to go from 0 to 1

    const handleHover = () => {
        if (!isScrolling) {
            setIsScrolling(true)
        }
    }

    const handleLeave = () => {
        setIsScrolling(false)
    }

    const handleClick = () => {
        setIsScrolling(!isScrolling)
    }

    // Handle scroll animations with consistent speed
    useEffect(() => {
        const currentProgress = scrollProgress.get()
        const targetProgress = isScrolling ? 1 : 0
        const distance = Math.abs(targetProgress - currentProgress)
        const duration = distance / scrollSpeed

        // Animate to target with calculated duration
        const controls = animate(scrollProgress, targetProgress, {
            duration: duration,
            ease: "linear"
        })

        // Cleanup function to stop animation if component unmounts
        return () => controls.stop()
    }, [isScrolling, scrollProgress, scrollSpeed])

    return (
        <div 
            className='relative h-full w-full cursor-pointer overflow-hidden'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleClick}
        >
            <motion.div
                className="w-full h-auto"
                style={{
                    y: yPosition
                }}
            >
                <OptimizedImage
                    src={image.src}
                    alt={image.alt || "Full page screenshot"}
                    width={540}
                    height={3200}
                    crop="fit"
                    gravity="north"
                    quality="auto"
                    format="auto"
                    className="w-full h-auto object-cover object-top"
                />
            </motion.div>
        </div>
    )
}

export default AutoScrollMockup