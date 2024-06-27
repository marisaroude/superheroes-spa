'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import { formatImageName } from '@/utils/formatImage'
import styles from './carousel.module.css'

export default function CarouselImage({ images }) {
    if (!images || images.length === 0) return null;

    const formattedImages = images.map(item => formatImageName(item));

    return (
        <Carousel
            data-bs-theme="dark"
            controls={images.length > 1}
            indicators={images.length > 1}
        >
            {formattedImages.map((item, index) => (
                <Carousel.Item key={index}>
                    <Image
                        src={
                            item
                                ? `/icons/${item}.png`
                                : '/images.jpeg'
                        }
                        width={250}
                        height={250}
                        alt={item}
                        className={`d-block ${styles.imageStyles}`}
                    />
                    <Carousel.Caption>
                        {/* Puedes personalizar esto */}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
