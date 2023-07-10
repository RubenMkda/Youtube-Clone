import Image from "next/image"
import styles from '@/app/page.module.css'

const LinkVideo = () => {
    return(
        <div className={styles.nextVideo}>
            <Image className={styles.linkVideo} src={'/uminek.jpg'} width={168} height={94} alt='video'/>
            <div className={styles.infoLinkVdeo}>
                <h7>Umineko No karu No Ni</h7>
                <p>Beatrice</p>
                <p>Hace 2 días</p>
            </div>
        </div>
    )
}

export default LinkVideo