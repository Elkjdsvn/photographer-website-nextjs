import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const navbarList = ['Projets', 'Expositions', 'Tirage', 'À propos', 'Contact', 'Instagram']

export const Navbar = () => {
    return (
        <ul className={styles.listContainer}>
            {navbarList.map(listEntry => {
                return (
                    <Link href={`/`}>
                        <a>
                            <li className={styles.element}>{listEntry}</li>
                        </a>
                    </Link>
                )
            })}
        </ul>
    )
}