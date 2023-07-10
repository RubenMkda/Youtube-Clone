import VideosOnLoad from "./main/VideosLoad"
import BelowVideo from "./main/belowVIdeo"
import VideoPlayer from "./video"
import styles from '@/app/page.module.css'

const Main = () => {
    return(
        <main>
            <section className={styles.primary}>
                <VideoPlayer />
                <BelowVideo />
            </section>
            <VideosOnLoad />
        </main>
    )
}

export default Main