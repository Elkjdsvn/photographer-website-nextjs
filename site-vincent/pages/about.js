import styles from '../styles/About.module.css'
import Image from 'next/image'
import aboutImage from '../images/about-image.jpg'
import {Header} from '../components/Header.js'

export default function About() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src={aboutImage}/>
        </div>
        <section>
            <p>Vincent Enot, né à Cognac, actuellement basé à Paris, France.</p>
            <p>Photographe indépendant, débutant en 2022 mes premiers projets professionnel.
Attentif , ouvert et à l’écoute du monde qui m’entoure, ma photographie m’amène à voyager, rencontrer et partager l’univers d’inconnus ou d’environnements que j’essaye au mieux de comprendre et de retranscrire avec une photo humaniste et sensible.</p>
        </section>
    </div>
  )
}
