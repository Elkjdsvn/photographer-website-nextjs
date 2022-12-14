import styles from "../styles/Header.module.css"
import { useState, useEffect } from "react"
import { Navbar } from "./Navbar"
import { ResponsiveNavbarButton } from "./ResponsiveNavbarButton"

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavClick = () => {
        return setNavbarOpen(navbarOpen => !navbarOpen)
    }

    useEffect(() => {
        navbarOpen ? document.body.style['overflow'] = 'hidden' : document.body.style['overflow'] = 'visible';
    }, [navbarOpen])



    return (
    <>    
        <header className={`${styles.header} ${navbarOpen && styles['open-nav']}`}>
            <h1 className={styles.title}>Vincent Enot</h1>

            <nav className={styles.navDesktopContainer}>
                <Navbar open={navbarOpen}/>
            </nav>
            <div className={styles.navButton}>
                <ResponsiveNavbarButton onClick={() => handleNavClick()} open={navbarOpen}/>
            </div>
        </header>
        {navbarOpen ? <nav className={styles.navMobileContainer}><Navbar open={navbarOpen}/></nav> : null}
    </>
    )
}