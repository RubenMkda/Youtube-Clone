import styles from '@/app/page.module.css'
import ProgressBar from './progressBar'
import PlayPauseButton from './buttonPlayPause'
import Image from 'next/image'
import VolumenBar from './volumenBar'
import Timer from './timer'
import SwitchButton from './switch'
import ButtonNextVideo from './buttonNextVideo'
import Fullscreen from './fullscreen'

const ContainerControls = (props) => {
    return(
        <div className={styles.controlsContainer} ref={props.controlerVideoRef} onMouseEnter={props.handleEnterVideo} onMouseLeave={props.handleOutVideo} onDoubleClick={props.handleFullscreen}>

          <ProgressBar videoRef={props.videoRef} videoAmbientRef={props.videoAmbientRef}/>

          <div className={styles.containerButtons} >

            <div>
              <PlayPauseButton handlePlayPause={props.handlePlayPause} classButtonPlayPause={props.classButtonPlayPause}/>
              <ButtonNextVideo />
              <VolumenBar videoRef={props.videoRef}/>
              <Timer videoRef={props.videoRef}/>
            </div>

            <div className={styles.rightContainer}>

              <Fullscreen handleFullscreen={props.handleFullscreen} />

              <button className={styles.playButton}>
                    <svg fill='azure' width="30" height="25">
                      <path d="M5,5 h20 a2,2 0 0 1 2,2 v15 a2,2 0 0 1 -2,2 h-20 a2,2 0 0 1 -2,-2 v-15 a2,2 0 0 1 2,-2 z" style={{fill: 'transparent'}} stroke="white" strokeWidth={2}/>
                    </svg>
              </button>

              <button className={styles.playButton}>
                    <svg fill='azure' width="30" height="25">
                      <path d="M5,5 h20 a2,2 0 0 1 2,2 v15 a2,2 0 0 1 -2,2 h-20 a2,2 0 0 1 -2,-2 v-15 a2,2 0 0 1 2,-2 z" style={{fill: 'transparent'}} stroke="white" strokeWidth={2}/>
                      <rect x="12" y="15" width="12" height="6" rx="0" ry="0" />
                    </svg>
              </button>

              <button className={styles.playButton}>
                <Image src={'/config.svg'} width={25} height={25} alt='config'/>
              </button>

              <button className={styles.playButton}>
                <svg fill='azure' viewBox="0 0 100 100" width={25} height={25} onClick={props.onClick}>
                  <rect x="0" y="18" width="100" height="75" strokeWidth="1" rx="10" ry="10" />
                  <rect x="5" y="55" width="23" height="10" strokeWidth="1" rx="10" ry="10" style={{fill: 'black'}} />
                  <rect x="34" y="55" width="55" height="10" strokeWidth="1" rx="10" ry="10" style={{fill: 'black'}} />
                  <rect x="5" y="75" width="55" height="10" strokeWidth="1" rx="10" ry="10" style={{fill: 'black'}} />
                  <rect x="65" y="75" width="23" height="10" strokeWidth="1" rx="10" ry="10" style={{fill: 'black'}} />
                </svg>
              </button>
              
              <SwitchButton />
            </div>
          </div>
      </div>
    )
}

export default ContainerControls