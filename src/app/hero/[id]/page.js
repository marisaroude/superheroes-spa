'use client'
import { getHeroById } from '@/functions/functionsHero'
import { useEffect, useState } from 'react'
import DetailHero from '@/components/detailHero/DetailHero'
export default function Hero({ params }) {
    const [hero, setHero] = useState([])

    const fetchHero = async () => {
        const result = await getHeroById(params.id)
        console.log('RESULT', result)
        setHero(result)
    }

    useEffect(() => {
        fetchHero()
    }, [params.id]) 

    return (
        <DetailHero hero={hero}/>
    )
}
