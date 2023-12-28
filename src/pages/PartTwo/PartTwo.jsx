import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import styles from './PartTwo.module.css'

export default function PartTwo() {
  return (
    <div className={styles.container} >

        <div className={styles.wrapper} >
            <h1 className={styles.title} data-aos="fade-right">Les défis de la gestion du temps</h1>

            <section className={styles.section} data-aos="fade-right"> 
                <h2 className={styles.title_section}>Procrastination</h2>
                <div className={styles.body_section}>
                    <img className={styles.image} src="/procrastination.png" alt="procrastination" />
            
                    <p>
                    La procrastination, le report constant des tâches, constitue l'un des principaux obstacles à une gestion du temps efficace. Comprendre ses causes et adopter des stratégies pour la surmonter est essentiel.
                    </p>                
                    </div>
            </section>

            <section className={styles.section} data-aos="fade-right">
                <h2 className={styles.title_section}>Manque de priorisation</h2>
                <div className={styles.body_section}>
                    <img className={styles.image} src="/prioritization.jpg" alt="procrastination" />
                    <p>
                        L'incapacité à définir des priorités peut entraîner une dispersion des efforts sur des tâches moins importantes, retardant ainsi la réalisation des objectifs majeurs. Apprendre à hiérarchiser les tâches est essentiel.                    
                    </p>
                </div>
            </section>

            <section className={styles.section} data-aos="fade-right">
                <h2 className={styles.title_section}>Surcharge de travail</h2>
                <div className={styles.body_section}>
                    <img className={styles.image} src="/overwork.png" alt="procrastination" />
        
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
