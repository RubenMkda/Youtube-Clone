import { useRef, useState } from 'react'
import styles from '@/app/page.module.css'

const ContainerTags = () => {

    const tagsRef = useRef()
    const [isMin, setIsMin] = useState(true)
    const [isMax, setIsMax] = useState(false)

    const handleClickNext = () => {
        const tags = tagsRef.current
        const clientWidth = tags.clientWidth
        const scrollWidth = tags.scrollWidth
        tags.scrollLeft += clientWidth /2
        setIsMax(tags.scrollLeft == scrollWidth-clientWidth)
        setIsMin(tags.scrollLeft == 0)
    }

    const handleClickPrev = () => {
        const tags = tagsRef.current
        const clientWidth = tags.clientWidth
        const scrollWidth = tags.scrollWidth
        tags.scrollLeft -= tags.clientWidth /2
        setIsMax(tags.scrollLeft == scrollWidth-clientWidth)
        setIsMin(tags.scrollLeft == 0)
    }

    return(
        <div className={styles.containertags}>
                {!isMin ? (<div  className={styles.containerbuttonTag}>
                    <button className={styles.tagprev} onClick={handleClickPrev}>{'<'}</button>
                </div>) : ''}

                <div className={styles.tags} ref={tagsRef}>
                    <button className={styles.tagsbuttons}>Todos</button>
                    <button className={styles.tagsbuttons}>Programacion</button>
                    <button className={styles.tagsbuttons}>Programacion</button>
                    <button className={styles.tagsbuttons}>Programacion</button>
                    <button className={styles.tagsbuttons}>comunismo</button>
                    <button className={styles.tagsbuttons}>comunismo</button>
                    <button className={styles.tagsbuttons}>comunismo</button>
                    <button className={styles.tagsbuttons}>Todos</button>
                    <button className={styles.tagsbuttons}>Todos</button>
                    <button className={styles.tagsbuttons}>Todos</button>
                    <button className={styles.tagsbuttons}>Todos</button>
                    <button className={styles.tagsbuttons}>Todos</button>
                </div>

                {!isMax ? (<div  className={styles.containerbuttonTagNext}>
                    <button className={styles.tagprev} onClick={handleClickNext}>{'>'}</button>
                </div>) : ''}
            </div>
    )
}

export default ContainerTags