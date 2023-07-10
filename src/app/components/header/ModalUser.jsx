import styles from '@/app/page.module.css'
import Login from './googleSession'


const ModalUser = () => {

    return(
        <section className={styles.modalUser}>
            <Login />
        </section>
    )
}

export default ModalUser