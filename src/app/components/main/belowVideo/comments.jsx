import Image from 'next/image'
import styles from '@/app/page.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ImageRedux from '../../imageRedux'

const CommentContainer = () => {

    const user = useSelector(state => state)
    const [isCliked, setIsClicked] = useState(false)
    const [comments, setComments] = useState([])

    const handleClickContainer = () => {
        if(!isCliked) setIsClicked(true)
    }

    const handleClickCancel = (e) => {
        e.preventDefault()
        setIsClicked(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.elements.comment.value
        setComments([...comments, comment]);
        e.target.elements.comment.value = '';
    };
    return(
        <section className={styles.comments}>
            <div className={styles.CommentContainer}>
                <ImageRedux user={user}/>
                <form className={styles.formComment} onSubmit={handleSubmit}>
                    <input className={styles.commentCreate} type="text" placeholder='Write a comentary' onClick={handleClickContainer} id='comment' name='comment'/>
                    {isCliked ? (<div className={styles.containerButtonsComments}>
                        <button type='submit' className={styles.buttonSubmitComment}>Submit</button>
                        <button className={styles.buttonCancelComment} onClick={handleClickCancel}>Cancel</button>
                    </div>): ''}
                </form>
            </div>
            {comments.map((comment, index) => (
                <div key={index} className={styles.CommentContainer}>
                    <ImageRedux user={user}/>
                    <div className={styles.textComment}>
                        <p>{user.name}</p>
                        <p>{comment}</p>
                        <div className={styles.commentLikeDislike}>
                            <button><Image src={'/like.svg'} width={19} height={19} alt='like'/></button>
                             <button><Image style={{transform: 'rotateX(180deg)'}} src={'/like.svg'} width={19} height={19} alt='like'/></button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CommentContainer