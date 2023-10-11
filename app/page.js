import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
      </div>

      <div className={styles.grid}>
        <a
          href="https://resposive-next-js.vercel.app/page"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Click Me  <span>-&gt;</span>
          </h2>
          
        </a>
      </div>




    </main>
  )
}
