import styles from '../styles/ResponsiveNavbarButton.module.css'
import { useState, useEffect } from 'react'

export const ResponsiveNavbarButton = (props) => {

    return (
            <div>
                <div className={`${styles.button} ${props.open && styles['open-nav']}`} onClick={props.onClick}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
    )
}