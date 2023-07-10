import styles from '@/app/page.module.css'
import { useRef } from 'react'

const ProgressBar = ({videoRef, videoAmbientRef}) => {

    const progressBarRef = useRef()

    const handleProgressChange = (e) => {
        const video = videoRef.current
        const videoAmbient = videoAmbientRef.current
        const progress = e.target.value
        const time = (progress / 100) * video.duration
        video.currentTime = time
        videoAmbient.currentTime = time
        const min = e.target.min
        const max = e.target.max
        const val = e.target.value
        e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }

    return(
        <div className={styles.containerProgress}>
          <input 
            type="range"
            min="0"
            max="100"
            defaultValue={0}
            className={styles.progressBar}
            onChange={handleProgressChange}
            ref={progressBarRef}
            />
        </div>
    )
}

export default ProgressBar