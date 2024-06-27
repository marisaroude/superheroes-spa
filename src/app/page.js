'use client'
import CardHero from '@/components/cardHero/CardHero'
import { getAllSuperheroes, getHeroDC, getHeroMarvel } from '@/functions/functionsHero'
import { useEffect, useState } from 'react'
import style from './home.module.css'
import { usePathname } from 'next/navigation'
export default function Home() {
    const [hero, setHero] = useState([])
    const pathname = usePathname()
    console.log('PATHNAME', pathname)
    // const fetchSuperheroes = async () => {
    //     const result = await getAllSuperheroes()
    //     console.log('RESULT', result)
    //     setHero(result)
    // }
    const fetchSuperheroes = async () => {
        let result;
        if (pathname === '/'){
            result = await getAllSuperheroes()
        } else if (pathname === '/marvel') {
            result = await getHeroMarvel();
        } else if (pathname === '/dc'){
            result = await getHeroDC();
        }
        console.log('RESULT', result)
        setHero(result)
    }
    useEffect(() => {
        fetchSuperheroes()
    }, [pathname])
    return (
        <div className={style.containerCards}>
            {hero.map((item, index) => (
                <CardHero
                    key={index}
                    id={item._id}
                    name={item.name}
                    real_name={item.real_name}
                    biography={item.biography}
                    imageName={item.images[0]}
                />
            ))}
        </div>
    )
}
