import styles from '@/app/page.module.css'
import LinkVideo from './linkVideo'
import Image from 'next/image'
import { useRef, useState } from 'react'

const Shorts = () => {

    const ShortsRef = useRef()
    const [isMin, setIsMin] = useState(true)
    const [isMax, setIsMax] = useState(false)

    const handleClickNext = () => {
        const shorts = ShortsRef.current
        const clientWidth = shorts.clientWidth
        const scrollWidth = shorts.scrollWidth
        shorts.scrollLeft += clientWidth
        setIsMax(shorts.scrollLeft == scrollWidth-clientWidth)
        setIsMin(shorts.scrollLeft == 0)
    }

    const handleClickPrev = () => {
        const shorts = ShortsRef.current
        const clientWidth = shorts.clientWidth
        const scrollWidth = shorts.scrollWidth
        shorts.scrollLeft -= clientWidth
        setIsMax(shorts.scrollLeft == scrollWidth-clientWidth)
        setIsMin(shorts.scrollLeft == 0)
    }

    return(
        <section className={styles.shorts}>
            <LinkVideo />
            <div className={styles.containerShorts}>
                <h3>Shorts</h3>
                <div>
                    {!isMin ? (<div className={styles.containerButtonShortsPrev}>
                        <button onClick={handleClickPrev}>{'<'}</button>
                    </div>): ''}
                    
                    <div className={styles.containerShortVideo} ref={ShortsRef}>
                        <Image className={styles.shortVideo} src={'/uminekoposter.jpg'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/beatrice.png'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/uminekoposter.jpg'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/beatrice.png'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/beatrice.png'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/uminekoposter.jpg'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/uminekoposter.jpg'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/beatrice.png'} width={168} height={250} alt='poster'/>
                        <Image className={styles.shortVideo} src={'/beatrice.png'} width={168} height={250} alt='poster'/>
                    </div>

                    {!isMax ? (<div className={styles.containerButtonShortsNext}>
                        <button onClick={handleClickNext}>{'>'}</button>
                    </div>): ''}
                </div>
            </div>
        </section>
    )
}

export default Shorts