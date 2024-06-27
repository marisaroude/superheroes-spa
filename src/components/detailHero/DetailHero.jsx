'use client'
import React, { useEffect, useState } from 'react'
import styles from './detailsHero.module.css'
import CarouselImage from '../carousel/CarouselImage'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import Image from 'next/image'
import { deleteHero, updateHero } from '@/functions/functionsHero'
import ToastSuccess from '../Toast/ToastSuccess'
import Alert from '../alert/Alert'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

export default function DetailHero({ hero }) {
    const links = [
        { text: 'Home', link: '/', active: false },
        { text: hero.name, link: `/hero/${hero._id}`, active: true },
    ]
    const [modalOpen, setModalOpen] = useState(false)
    const [openToast, setOpenToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [heroData, setHeroData] = useState({})
    const router = useRouter()

    useEffect(() => {
        const { _id, _v, ...rest } = hero
        setHeroData(rest)
    }, [hero])
    const handleCancel = () => {
        setModalOpen(false)
    }

    const handleCloseToast = () => {
        setOpenToast(false)
        router.push('/')
    }

    const handleDelete = async () => {
        const deleted = await deleteHero(hero._id)
        if (deleted) {
            setModalOpen(false)
            setToastMessage('Héroe eliminado exitosamente.')
            setOpenToast(true)
        }
    }

    const handleEdit = async (id, hero) => {
        const updated = await updateHero(id, hero)
        if (updated) {
            setModalOpen(false)
            setToastMessage('Héroe actualizado exitosamente.')
            setOpenToast(true)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log('NAME', name)
        console.log('VALUE', value)
        setHeroData({ ...heroData, [name]: value })
    }

    return (
        <>
            <BreadCrumbs links={links} />
            <div className={styles.container}>
                <div className={styles.containerIcons}>
                    <div
                        onClick={() => setEditMode(!editMode)}
                        className={styles.pressable}
                    >
                        <Image
                            style={{ margin: '10px' }}
                            width={25}
                            height={25}
                            src={require('../../../public/icons/edit.svg')}
                        />
                    </div>
                    <div
                        onClick={() => setModalOpen(true)}
                        className={styles.pressable}
                    >
                        <Image
                            style={{ margin: '10px' }}
                            width={25}
                            height={25}
                            src={require('../../../public/icons/trash.svg')}
                        />
                    </div>
                </div>
                <div className={styles.containerCard}>
                    <div className={styles.containerLogoHouse}>
                        <Image
                            src={
                                hero.house === 'DC'
                                    ? require('../../../public/icons/DC.png')
                                    : hero.house === 'Marvel'
                                    ? require('../../../public/icons/Marvel.png')
                                    : ''
                            }
                            width={hero.house === 'DC' ? 50 : 150}
                            height={50}
                        />
                    </div>
                    <div className={styles.containerBody}>
                        <div className={styles.containerImage}>
                            <CarouselImage images={hero.images} />
                        </div>
                        <div className={styles.containerText}>
                            <label>
                                <span>Nombre del personaje: </span>
                                {editMode ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={heroData.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    hero.name
                                )}
                            </label>
                            <label>
                                <span>Nombre real: </span>
                                {editMode ? (
                                    <input
                                        type="text"
                                        name="real_name"
                                        value={heroData.real_name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    hero.real_name
                                )}
                            </label>
                            <label>
                                <span>Casa: </span>
                                {editMode ? (
                                    <select name="house">
                                        <option value="value1" selected>
                                            {heroData.house}
                                        </option>
                                        <option value="value2">
                                            {hero.house === 'DC'
                                                ? 'Marvel'
                                                : 'DC'}
                                        </option>
                                    </select>
                                ) : (
                                    hero.house
                                )}
                            </label>
                            <label>
                                <span>Equipamiento: </span>
                                {editMode ? (
                                    <input
                                        type="text"
                                        name="equipment"
                                        value={heroData.equipment}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    hero.equipment
                                )}
                            </label>
                            <label>
                                <span>Año de aparición: </span>
                                {editMode ? (
                                    <input
                                        type="number"
                                        name="year_appearance"
                                        value={heroData.year_appearance}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    hero.year_appearance
                                )}
                            </label>
                            <p>
                                <span>Biografía: </span>
                                {editMode ? (
                                    <input
                                        type="text"
                                        name="biography"
                                        value={heroData.biography}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    hero.biography
                                )}
                            </p>
                        </div>
                    </div>
                    {editMode && (
                        <Button
                            variant="dark"
                            onClick={() =>
                                handleEdit( hero._id, heroData )
                            }
                        >
                            Actualizar
                        </Button>
                    )}
                </div>
            </div>
            {modalOpen && (
                <Alert
                    title={'¡Atención!'}
                    textBody={
                        '¿Está seguro que desea eliminar este heroe? No podrá revertir la acción.'
                    }
                    textSecondary={'Cancelar'}
                    textPrimary={'Eliminar'}
                    handleSecondary={handleCancel}
                    handlePrimary={handleDelete}
                />
            )}
            {openToast && (
                <ToastSuccess
                    title={'¡Enhorabuena!'}
                    text={toastMessage}
                    handleClose={handleCloseToast}
                    showToast={openToast}
                />
            )}
        </>
    )
}
