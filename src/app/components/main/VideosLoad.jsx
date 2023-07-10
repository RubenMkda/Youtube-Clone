import styles from '@/app/page.module.css'
import ContainerTags from './videosloaded/tagsContainer'
import Shorts from './videosloaded/Shorts'
import LinkVideo from './videosloaded/linkVideo'

const VideosOnLoad = () => {
    return(
        <section className={styles.videosLoaded}>
          <ContainerTags />
          <Shorts />
          <LinksVideos />
        </section>
    )
}

const LinksVideos= () => {
    return(
        <div className={styles.videosLinks}>
          <LinkVideo />
          <LinkVideo />
          <LinkVideo />
          <LinkVideo />
          <LinkVideo />
          <LinkVideo />
          <LinkVideo />
         </div>
    )
}

export default VideosOnLoad