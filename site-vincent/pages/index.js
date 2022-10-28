import styles from '../styles/Home.module.css'
import {Header} from '../components/Header.js'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vincent Enot</title>
        <link rel="icon" href='./favicon.ico'></link>
      </Head>
    </div>
  )
}
