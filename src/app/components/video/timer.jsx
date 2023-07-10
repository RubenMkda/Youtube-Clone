import { useState, useEffect  } from "react"
import styles from '@/app/page.module.css'

const Timer = ({videoRef}) => {

    const [duration, setDuration] = useState('00:00')
    const [currentTime, setCurrentTime] = useState('00:00');

    const TimeConverter = (seconds) => {
        const minutes = Math.floor(seconds/60)
        const secondsLeft = Math.floor(seconds % 60)
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }

    useEffect(() => {
        if (videoRef.current) {
            const durationTotal = videoRef.current.duration || 0
            const durationTime = TimeConverter(durationTotal)
            setDuration(durationTime)

            const handleTimeUpdate = () => {
                const currentTime = TimeConverter(videoRef.current.currentTime)
                setCurrentTime(currentTime)
            }

            videoRef.current.addEventListener('timeupdate', handleTimeUpdate)

        }
    }, [videoRef.current])

    return(
        <div className={styles.timer}>
            <span>
                <span>{currentTime} </span> / <span> {duration}</span> 
            </span>
        </div>
    )
}

export default Timer