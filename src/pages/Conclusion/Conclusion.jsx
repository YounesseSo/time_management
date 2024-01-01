import styles from './Conclusion.module.css'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'

export default function Conclusion() {
  return (
    <div className={styles.container} >
  
    <div className={styles.wrapper} data-aos="fade-right">
      <h1 className={styles.title}>Conclusion</h1>
      <div className={styles.body}>
          <p>
          En conclusion, la gestion du temps est un pilier essentiel de la réussite tant sur le plan professionnel que personnel. En comprenant les défis et en adoptant des stratégies appropriées, chacun peut améliorer sa capacité à gérer efficacement son temps, favorisant ainsi la productivité, le bien-être et l'accomplissement de ses objectifs.
          </p>
      </div>

      <BottomNavigation previous={{path:'/part-3' , name:'Les methodes de gestion du temps'}} next={{path:'/end' , name:'La Fin'}}/>
    </div>

  
  </div>

  )
}
