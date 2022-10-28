import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const navbarList = ['Projets', 'Expositions', 'Tirage', 'À propos', 'Contact', 'Instagram']

export const Navbar = (props) => {
    return (
        <ul className={styles.listContainer}>
            {navbarList.map(listEntry => {
                return (
                    <Link href={`/`}>
                        <a>
                            <li className={`${styles.element} ${props.open && styles['open-nav']}`}>{listEntry}</li>
                        </a>
                    </Link>
                )
            })}
        </ul>
    )
}