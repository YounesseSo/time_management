
import { IoClose } from "react-icons/io5";
import styles from '../Modal.module.css';


export default function MethodTwoModal({setShowModal}) {
  return (
    <div className={styles.container}>
        <div className={styles.inner_container}>

            <div className={styles.header}>
                <h1>La matrice Pomodoro</h1>
                <button onClick={()=>setShowModal(false)}>
                    <IoClose size={29}/>
                </button>
            </div>

            <div className={styles.body}> 
                <div className={styles.image}>
                    <img src="/methode_pomodoro.png" alt="methode pomodoro" />
                </div>
                <p>
                Le principe de cette méthode est simple : elle consiste à découper ses tâches en sessions de travail de 25 minutes sans interruption, entrecoupées de pauses de 5 minutes. On dit qu’un intervalle de travail correspond à un pomodoro. Après 4 pomodoros, vous pouvez prendre une pause plus longue de 15 à 30 minutes.                        
                </p>
            </div>
        </div>
    </div>
  )
}
