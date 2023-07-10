import styles from '@/app/page.module.css'

const ButtonNextVideo = () => {
    return(
        <button className={styles.playButton}>
            <svg viewBox="0 0 100 100" width={25} fill='azure' height={25}>
                <polygon points="20,20 80,50 20,80"  strokeWidth="5" />
                <rect x="80" y="20" width="20" height="60" strokeWidth="5" />
            </svg>
        </button>
    )
}

export default ButtonNextVideo