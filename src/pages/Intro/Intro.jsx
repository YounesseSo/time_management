import React from 'react'
import styles from './Intro.module.css'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'

export default function Intro() {
  return (
    <div className={styles.container} >
  
      <div className={styles.wrapper} data-aos="fade-right">
        <h1 className={styles.title}>Introduction</h1>
        <div className={styles.body}>
            <p>
            La gestion du temps est une compétence cruciale dans notre vie quotidienne, tant sur le plan professionnel que personnel. Elle implique la planification, l'organisation et la priorisation des activités pour maximiser l'efficacité et atteindre les objectifs fixés. Cet exposé explore l'importance de la gestion du temps, les défis auxquels nous sommes confrontés et, les methodes les plus populaires de gestion de temps.
            </p>
        </div>

        <BottomNavigation previous={{path:'/' , name:'Acceuil'}} next={{path:'/part-1' , name:'Importance de la gestion du temps'}}/>
      </div>

    
    </div>
  )
}
