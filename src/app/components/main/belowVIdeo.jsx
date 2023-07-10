import styles from '@/app/page.module.css'
import InfoVideo from './belowVideo/infoVideo'
import Description from './belowVideo/description'
import CommentContainer from './belowVideo/comments'

const BelowVideo = () => {
    return(
        <section className={styles.belowVideo}>
            <h1>LOLLAPALOZA - Ippo Vs. Sendo.</h1>
            <InfoVideo />
            <Description />
            <CommentContainer />
        </section>
    )
}

export default BelowVideo