import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import styles from './PartOne.module.css'

export default function PartOne() {
  return (
    <div className={styles.container}>

        <div className={styles.wrapper} data-aos="fade-right" >
            <h1 className={styles.title}>L'importance de la gestion du temps</h1>

            <section className={styles.section}>
                <h2 className={styles.title_section}>Maximisation de la productivité</h2>
                <div className={styles.body_section}>
                    <img className={styles.image} src="/productivity.png" alt="productivity" />
                    <p>
                    La gestion du temps permet d'optimiser l'utilisation des ressources disponibles, favorisant ainsi une productivité accrue. En planifiant judicieusement les tâches, on évite les retards et les pertes de temps inutiles.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.title_section}>Réduction du stress</h2>
                <div className={styles.body_section}>
                    <img className={styles.image} src="/stress.jpg" alt="reductionStress" />
                
                    <p>
                    Une gestion du temps efficace contribue à réduire le stress en évitant les retards, les échéances manquées et les situations de dernière minute. Cela favorise un environnement de travail plus serein et une meilleure qualité de vie.  </p>
                </div>
            </section>


            <BottomNavigation previous={{path:'/intro' , name:'Introduction'}} next={{path:'/part-2' , name:'Les défis de la gestion du temps'}} />
        </div>    
    
    </div>
  )
}
