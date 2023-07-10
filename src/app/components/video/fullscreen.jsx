import styles from '@/app/page.module.css'

const Fullscreen = ({handleFullscreen}) => {
    return(
    <button className={styles.fullScreen} onClick={handleFullscreen}>
      <svg fill='azure' width="20" height="20" viewBox='0 0 20 20'>

        <line x1="0" y1="0" x2="6" y2="0" stroke="white" strokeWidth={5}/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="white" strokeWidth={5}/>

        <line x1="0" y1="20" x2="0" y2="14" stroke="white" strokeWidth={5}/>
        <line x1="0" y1="20" x2="6" y2="20" stroke="white" strokeWidth={5}/>

        <line x1="20" y1="20" x2="14" y2="20" stroke="white" strokeWidth={5}/>
        <line x1="20" y1="20" x2="20" y2="14" stroke="white" strokeWidth={5}/>

        <line x1="20" y1="0" x2="14" y2="0" stroke="white" strokeWidth={5}/>
        <line x1="20" y1="0" x2="20" y2="6" stroke="white" strokeWidth={5}/>

      </svg>
    </button>)
}

export default Fullscreen