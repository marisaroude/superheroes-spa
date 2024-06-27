const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

export const getAllSuperheroes = async () => {
    const url = `${BASE_URL}/superheroes/heroes`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getHeroById = async (id) => {
    const url = `${BASE_URL}/superheroes/heroes/${id}`
    console.log('IDDDD', id)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}


export const getHeroMarvel = async () => {
    const url = `${BASE_URL}/superheroes/marvel`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getHeroDC = async () => {
    const url = `${BASE_URL}/superheroes/dc`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const updateHero = async (id, hero) => {
    console.log('HERO', hero)
    console.log('HERO IDDD', id)
    const url = `${BASE_URL}/superheroes/heroes/${id}`

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hero)
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}


export const deleteHero = async (id) => {
    const url = `${BASE_URL}/superheroes/heroes/${id}`

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error fetching`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}
