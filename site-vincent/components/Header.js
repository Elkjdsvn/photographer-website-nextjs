import styles from "../styles/Header.module.css"
import { useState, useEffect } from "react"
import { Navbar } from "./Navbar"
import { ResponsiveNavbarButton } from "./ResponsiveNavbarButton"

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavClick = navbarOpen => {
        return setNavbarOpen(navbarOpen => !navbarOpen)
    }
    const headerStyles = styles
    console.log(headerStyles)

    useEffect(() => {
        navbarOpen ? document.body.style['overflow'] = 'hidden' : document.body.style['overflow'] = 'visible';
        // navbarOpen ? styles.header['backgroundColor'] = 'white' : styles.header['backgroundColor'] = 'transparent';
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