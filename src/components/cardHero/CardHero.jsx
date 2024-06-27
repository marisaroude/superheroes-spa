'use client'
import React from 'react'
import style from './cardHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { formatImageName } from '@/utils/formatImage'
export default function CardHero({
    id,
    name,
    real_name,
    biography,
    imageName,
}) {

    const formattedImageName = formatImageName(imageName)

    return (
        <div className={style.container}>
            <div className={style.containerImage}>
                <Image
                    className={style.image}
                    src={
                        imageName
                            ? require(`../../../public/icons/${formattedImageName}.png`)
                            : require('../../../public/images.jpeg')
                    }
                    width={250}
                    height={250}
                />
            </div>
            <div className={style.containerText}>
                <label>
                    <span>Nombre del personaje:</span> {name}
                </label>
                <label>
                    <span>Nombre real:</span> {real_name}
                </label>
                <div className={style.containerBiography}>
                    <p>
                        <span>Biografía:</span> {biography}
                    </p>
                </div>
                <Link className={style.seeMore} href={`/hero/${id}`}>
                    <Button variant="dark">Ver más</Button>
                </Link>
            </div>
        </div>
    )
}
