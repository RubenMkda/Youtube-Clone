import styles from '@/app/page.module.css'
import Image from 'next/image'

const InfoVideo = () => {
    return(
       <div className={styles.infoVideo}>

                <div className={styles.infoVideoRight}>
                    <Image src={'/rubenmkda.jpg'}  width={45} height={45} alt={'channelProfile'} quality={100}/>
                    <div className={styles.channelInfo}>
                        <p className={styles.titleChannel}>RubenMkda</p>
                        <p className={styles.infoChannel}>0 Suscriptions</p>
                    </div>
                    <button className={styles.suscribeButton}>
                        Subscribe
                    </button>
                </div>

                <div className={styles.infoVideoRight}>
                    <div className={styles.containerLikes}>
                        <button className={styles.likeButton}>
                            <Image src={'/like.svg'} width={25} height={25} alt='like'/>
                            <span>0</span>
                        </button>
                        <button className={styles.dislikeButton}>
                            <Image src={'/like.svg'} width={25} height={25} alt='like'/>
                        </button>
                    </div>
                    <button className={styles.shareButton}>
                        Share
                    </button>
                    <button className={styles.moreButton}>
                        <span>...</span>
                    </button>
                </div>
                
            </div>
    )
}

export default InfoVideo