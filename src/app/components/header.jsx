import styles from '@/app/page.module.css'
import Image from 'next/image'
import ButtonUser from './header/buttonUser'

const Header = () => {
    return(
        <header>

            <div className={styles.start}>
                <button className={styles.menuBurger}>
                    <svg width={20} height={20}>
                        <line x1={0} y1={5} x2={23} y2={5} stroke="white" strokeWidth={2}/>
                        <line x1={0} y1={10} x2={23} y2={10} stroke="white" strokeWidth={2}/>
                        <line x1={0} y1={15} x2={23} y2={15} stroke="white" strokeWidth={2}/>
                    </svg>
                </button>
                <h1 className={styles.namePage}>MkdaTube</h1>
            </div>

            <div className={styles.center}>
                <form action="" method="get">
                    <input type="text" name="q" placeholder="Ingresa tu búsqueda..." className={styles.search}/>
                    <button type="submit" className={styles.searchButton}>
                        <svg width="25" height="25">
                            <circle cx="10" cy="12" r="7" strokeWidth={2} fill="transparent" style={{stroke: 'azure', fill: 'transparent'}}/>
                            <line x1="16" y1="18" x2="22" y2="24" stroke="azure" strokeWidth={2}/>
                        </svg>
                    </button>
                </form>
                <button type="submit" className={styles.microphone}>
                        <Image src={'/microphone.svg'} width={25} height={25} alt='micropone'/>
                </button>
            </div>

            <div className={styles.end}>
                <button className={styles.menuBurger}>
                    <svg width="20" height="20">
                        <rect x="2.5" y="2.5" width="16" height="16" style={{fill: 'none'}} stroke="#fff" strokeWidth={1.5} />
                        <line x1="10.5" y1="5" x2="10.5" y2="15.5" stroke="#FFF" strokeWidth={1.5} />
                        <line x1="5.5" y1="10.5" x2="15.5" y2="10.5" stroke="#FFF" strokeWidth={1.5} />
                    </svg>
                </button>

                <button className={styles.menuBurger}>
                    <Image src={'/bell.svg'} width={20} height={20} alt='bell'/>
                </button>

                <ButtonUser />
            </div>
        </header>
    )
}

export default Header