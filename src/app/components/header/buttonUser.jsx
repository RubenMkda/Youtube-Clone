import styles from '@/app/page.module.css'
import ModalUser from './ModalUser'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ImageRedux from '../imageRedux'

const ButtonUser = () => {

    const user = useSelector(state => state)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
        {isOpen ? <ModalUser /> : ''}
        <button onClick={handleClick} className={styles.userButton}>
            <ImageRedux user={user}/>
        </button>
        </>
        )
}

export default ButtonUser