import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import styles from './PartTew.module.css'

export default function PartTew() {
  return (
    <div className={styles.container}>

        <div className={styles.wrapper}>
            <h1 className={styles.title}>Les défis de la gestion du temps</h1>

            <section className={styles.section}>
                <h2 className={styles.title_section}>Procrastination</h2>
                <div className={styles.body_section}>
                    <p>
                    Reporter des tâches importantes peut entraîner un manque de productivité et de gestion du temps efficace.
                    </p>                
                    </div>
            </section>
            <section className={styles.section}>
                <h2 className={styles.title_section}>Mauvaise planification</h2>
                <div className={styles.body_section}>
                    <p>
                    Ne pas établir de plan ou de liste de tâches peut entraîner une perte de temps et d'énergie à essayer de prioriser les activités.                    
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.title_section}>Surcharge de travail</h2>
                <div className={styles.body_section}>
                    <p>
                    Avoir trop de tâches à accomplir dans un laps de temps limité peut rendre difficile la gestion efficace du temps.
                    </p>
                </div>
            </section>


            <BottomNavigation previous={{path:'/part-1' , name:'L\'importance de la gestion du temps'}} next={{path:'/part-3' , name:'Les methodes de la gestion du temps'}} />
        </div>    
    
    </div>
  )
}
