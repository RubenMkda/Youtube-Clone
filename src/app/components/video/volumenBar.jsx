import styles from '@/app/page.module.css'
import { useState } from 'react'

const VolumenBar = ({videoRef}) => {

    const [isMuted, setIsMuted] = useState(false)
    const [lastValue, setLastValue] = useState(0)
    const [value, setValue] = useState(50)
    
    const handleVideoVolume = (e) => {
        if(isMuted) setIsMuted(!isMuted)
        const video = videoRef.current
        video.volume = e.target.value / 100
        const val = e.target.value
        setValue(val)
        console.log(val)
        e.target.style.backgroundSize = (val) * 100 / (100) + '% 100%'
    }

    const handleMute = () => {
        const video = videoRef.current
        const $volumenBar = document.getElementsByClassName(styles.volumenBar)[0]
        if(isMuted){
            video.volume = lastValue /100
            $volumenBar.value = lastValue
            $volumenBar.style.backgroundSize = ($volumenBar.value) * 100 / (100) + '% 100%'
            setIsMuted(!isMuted)
            setValue($volumenBar.value)
        }
        else{
            setLastValue($volumenBar.value)
            video.volume = 0
            $volumenBar.value = 0
            $volumenBar.style.backgroundSize =  ($volumenBar.value) * 100 / (100) + '% 100%'
            setIsMuted(!isMuted)
            setValue($volumenBar.value)
        }
    }

    return(
        <>
            <button className={styles.playButton} onClick={handleMute}>
                <svg width="30" height="25"  viewBox="0 0 30 20"> 
                    {(value > 50) ? <svg  viewBox="0 0 24 24" >
                        <path fill='azure' d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                    </svg> : ''}
                    {(value > 1 && value <= 50) ? <svg  viewBox="0 0 24 24">
                        <path fill='azure' d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />
                    </svg> : ''}
                    {value == 0 ? <svg viewBox="0 0 24 24">
                        <path fill='azure' d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
                    </svg> : ''}
                </svg>
            </button>
            <div className={styles.containerVolumen}>
            <input className={styles.volumenBar} type="range" min='0' max='100' onChange={handleVideoVolume}/>
            </div>
        </>
    )
}

export default VolumenBar