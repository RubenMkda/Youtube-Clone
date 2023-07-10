import styles from '@/app/page.module.css'
import { useRef, useState } from 'react'

const Description = () => {

    const descriptionRef = useRef()
    const [isMoreActived, SetIsMoreActived] = useState(true)

    const handleCickMore = () =>{
        const description = descriptionRef.current
        description.classList.toggle(styles.more)
        SetIsMoreActived(!isMoreActived)
    }

    return(
        <section className={styles.description}>
                <div className={styles.descriptionContent} onClick={handleCickMore} ref={descriptionRef}>
                    <div className={styles.descriptionTitle}><p>info Descripcion</p></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem iusto! Quidem ullam est perferendis adipisci rerum non autem. Perspiciatis corrupti odit magnam amet voluptatibus illum quos obcaecati molestiae nihil?
                    Consectetur odit eligendi voluptate nisi magnam temporibus saepe! Eaque nulla ducimus, numquam dolores quasi obcaecati veritatis quibusdam iste, similique doloremque porro at qui maiores distinctio perspiciatis quas tempore delectus aperiam.
                    Ducimus dolorum, officia voluptatem tempora repellendus laborum sit in perspiciatis fugiat harum rerum, eum obcaecati aliquid at quod dolores non aperiam ea delectus quis odio alias? Blanditiis, repellat quod. Praesentium?
                    Quam, unde. Officiis qui libero, nobis minus neque odio quidem consectetur amet nam illum repellat ullam. Labore dolores suscipit, ab veniam minus sit iure quidem obcaecati facere corporis. At, deserunt!
                    Animi rerum beatae a vel vitae eligendi, consectetur suscipit vero illo quae! Enim iure dolores quod, facilis eligendi deleniti maxime nemo libero optio itaque corrupti tenetur, rem debitis nostrum reprehenderit!</p>
                </div>
                <div className={styles.expander} onClick={handleCickMore}>{isMoreActived ? 'See more':'See less'}</div>
            </section>
    )
}

export default Description