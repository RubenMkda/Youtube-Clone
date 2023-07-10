import React, { useState } from 'react';
import styles from '@/app/page.module.css'

const SwitchButton = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
        <input type="checkbox" className={styles.checkbox} id='checkbox' checked={isChecked}
        onChange={handleInputChange}/>
        <label htmlFor="checkbox" className={styles.checkboxLabel}>
            <span className={styles.ball}>
               {!isChecked ? <svg width="15" height="15" viewBox="0 0 25 25">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg> : 
                <svg viewBox="0 0 100 100" width={20} height={15}>
                    <polygon points="25,20 80,50 25,80" style={{fill: 'black'}}/>
                </svg>}
            </span>
        </label>
    </>
  );
}

export default SwitchButton;