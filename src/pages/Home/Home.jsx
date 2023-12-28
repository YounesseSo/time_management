import styles from './Home.module.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero_container}>
          <h1 className={styles.title}>
            La gestion de temps <br />
            <span>Clé de la Productivité et de l'Équilibre de Vie</span>

          </h1>
          <div className={styles.details}>
              <ul>
                <span>Réalisé par</span>
                <li>Snipe harvard</li>
                <li>Snipe harvard</li>
                <li>Snipe harvard</li>
              </ul>

              <ul>
                <span>Encadrée par</span> 
                <li>Teacher</li>
              </ul>
          </div>

      </div>

      <div className={styles.plan_container}>
          <div className={styles.plan}>
            <Link to='/intro' className={styles.btn} role="button" data-aos='fade-right'>Introduction</Link>
            <Link to='/part-1' className={styles.btn} role="button" data-aos='fade-left'>L'importance de gestion du temps</Link>
            <Link to='/part-2' className={styles.btn} role="button" data-aos='fade-right'>Les défis de la gestion du temps</Link>
            <Link to='/part-3'className={styles.btn} role="button" data-aos='fade-left'>Les methodes de gestion du temps</Link>
            <Link to='/conclusion' className={styles.btn} role="button" data-aos='fade-right'>Conclusion</Link>
          </div>

      </div>
    </div>
    
  )
}
