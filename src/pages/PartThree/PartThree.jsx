import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import styles from './PartThree.module.css'
export default function PartThree() {
    return (
        <div className={styles.container} >
    
            <div className={styles.wrapper} >
                <h1 className={styles.title} data-aos="fade-right">Les methodes de la gestion du temps</h1>
                <section className={styles.section} data-aos="fade-right"> 
                    <h2 className={styles.title_section}>Matrice d'Eisenhower</h2>
                    <div className={styles.body_section}>
                        <img className={styles.image} src="/eisenhower-matrice.png" alt="eisenhower-matrice" />
                
                        <p>
                        Cette méthode classe les tâches en fonction de leur urgence et de leur importance dans un tableau à quatre quadrants : urgent et important, urgent mais pas important, important mais pas urgent, ni urgent ni important. Cela aide à prioriser les tâches et à se concentrer sur celles qui ont le plus d'impact.                        </p>                
                        </div>
                </section>
    
                <section className={styles.section} data-aos="fade-right">
                    <h2 className={styles.title_section}>La méthode Pomodoro</h2>
                    <div className={styles.body_section}>
                        <img className={styles.image} src="/methode_pomodoro.png" alt="methode_pomodoro" />
                        <p>
                        Le principe de cette méthode est simple : elle consiste à découper ses tâches en sessions de travail de 25 minutes sans interruption, entrecoupées de pauses de 5 minutes. On dit qu’un intervalle de travail correspond à un pomodoro. Après 4 pomodoros, vous pouvez prendre une pause plus longue de 15 à 30 minutes.                        </p>
                    </div>
                </section>
                <BottomNavigation previous={{path:'/part-2' , name:'Les défis de la gestion du temps'}} next={{path:'part-4' , name:'Conclusion'}}/>
            </div>    
        
        </div>
      )
}
