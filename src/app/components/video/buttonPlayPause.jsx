import styles from '@/app/page.module.css'

const PlayPauseButton = ({ handlePlayPause, classButtonPlayPause }) => {
  return (
    <button className={styles.playButton} onClick={handlePlayPause}>
      {classButtonPlayPause !== '/pause.svg' ? 
        <svg width="25" height="25" fill='azure' viewBox="0 0 25 25">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg> : 
        <svg viewBox="0 0 100 100" fill='azure' width={25} height={25}>
          <polygon points="25,20 80,50 25,80"/>
        </svg>}
    </button>
  )
}

export default PlayPauseButton