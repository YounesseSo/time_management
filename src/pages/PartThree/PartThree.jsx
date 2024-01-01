import { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import styles from './PartThree.module.css'

import MethodOneModal from './MethodOneModal/MethodOneModal'
import MethodTwoModal from './MethodTwoModal/MethodTwoModal'
import MethodThreeModal from './MethodThreeModal/MethodThreeModal';

export default function PartThree() {
    const [showModal , setShowModal] = useState(null)
    
    useEffect(()=>{
        if(showModal) document.body.style.overflowY = 'hidden';
        else document.body.style.overflowY = 'auto';

        return ()=> document.body.style.overflowY= 'auto';
    },[showModal])

    function getModal(){

        switch(showModal){
            case 1 :
                return <MethodOneModal setShowModal={setShowModal}/>
            case 2 :
                return <MethodTwoModal setShowModal={setShowModal}/>
            case 3 :
                return <MethodThreeModal setShowModal={setShowModal}/>
        }
    }


    return (
        <div className={styles.container} >
            
            <div className={styles.wrapper} >
                <h1 className={styles.title} data-aos="fade-right">Les methodes de la gestion du temps</h1>
                <div className={styles.cards_container}>
                    {/* <section className={styles.card} > 
                        <h2 className={styles.title}>Matrice d'Eisenhower</h2>
                        <img className={styles.image} src="/eisenhower-matrice.png" alt="eisenhower-matrice" />
                        <div className={styles.body}>
                    
                            <p>
                            Cette méthode classe les tâches en fonction de leur urgence et de leur importance dans un tableau à quatre quadrants : urgent et important, urgent mais pas important, important mais pas urgent, ni urgent ni important. Cela aide à prioriser les tâches et à se concentrer sur celles qui ont le plus d'impact.                        
                            </p>                
                        </div>
                    </section> */}
        

                    <section className={styles.card_container} onClick={()=>setShowModal(1)}>
                        <div className={styles.card}>
                            <div className={styles.title_card}>
                                <h2 >Matrice d'Eisenhower</h2>
                            </div>
                            <div className={styles.image}>
                                <img  src="/matrice-eisenhower.webp" alt="methode_eisenhower" />
                            </div>
                        </div>

                        <div className={styles.border}></div>

                    </section>


                    <section className={styles.card_container} onClick={()=>setShowModal(2)}>
                        <div className={styles.card}>
                            <div className={styles.title_card}>
                                <h2 >La méthode Pomodoro</h2>
                            </div>
                            <div className={styles.image}>
                                <img  src="/methode_pomodoro.png" alt="methode_pomodoro" />
                            </div>
                        </div>
                        
                        <div className={styles.border}></div>

                    </section>


                    <section className={styles.card_container} onClick={()=>setShowModal(3)}>
                        <div className={styles.card}>
                            <div className={styles.title_card}>
                                <h2 >La méthode de Blocage de temps</h2>
                            </div>
                            <div className={styles.image}>
                                <img  src="/time-blocking.png" alt="time blocking" />
                            </div>

                        </div>
                        
                        <div className={styles.border}></div>

                    </section>

                </div>
                <BottomNavigation previous={{path:'/part-2' , name:'Les défis de la gestion du temps'}} next={{path:'/conclusion' , name:'Conclusion'}}/>
            </div>    
                                
            {
                showModal && getModal()

            }
        </div>
      )
}
