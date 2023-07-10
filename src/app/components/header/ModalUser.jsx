import styles from '@/app/page.module.css'
import Login from './googleSession'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

const clientId = '278106079939-h26348ohv17i03hkj7e2mcvsrp6h6851.apps.googleusercontent.com'

const ModalUser = () => {

    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load('client:auth2', start)
    })

    return(
        <section className={styles.modalUser}>
            <Login />
        </section>
    )
}

export default ModalUser