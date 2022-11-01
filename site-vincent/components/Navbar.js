import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const navObject = {
    'Projets': 'projects',
    'Expositions': 'expositions',
    'Tirage': 'printing',
    'À propos': 'about',
    'Contact': 'contact',
    'Instagram': ''
}
const navbarList = ['Projets', 'Expositions', 'Tirage', 'À propos', 'Contact', 'Instagram']

export const Navbar = (props) => {
    return (
        <ul className={styles.listContainer}>
            {navbarList.map(listEntry => {
                return (
                    <Link href={`/${navObject[`${listEntry}`]}`}>
                        <a>
                            <li className={`${styles.element} ${props.open && styles['open-nav']}`}>{listEntry}</li>
                        </a>
                    </Link>
                )
            })}
        </ul>
    )
}