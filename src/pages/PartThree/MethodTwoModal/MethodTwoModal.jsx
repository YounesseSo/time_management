
import { IoClose } from "react-icons/io5";
import styles from '../Modal.module.css';


export default function MethodTwoModal({setShowModal}) {
  return (
    <div className={styles.container}>
        <div className={styles.inner_container}>

            <div className={styles.header}>
                <h1>La méthode Pomodoro</h1>
                <button onClick={()=>setShowModal(false)}>
                    <IoClose size={29}/>
                </button>
            </div>

            <div className={styles.body}> 
                <div className={styles.image}>
                    <img src="/methode_pomodoro.png" alt="methode pomodoro" />
                </div>
                <p>

                La méthode Pomodoro est une technique de gestion du temps qui vise à améliorer la concentration et la productivité en fractionnant le travail en intervalles de temps définis.
                <ul>
                    <li><strong>Réglage du minuteur :</strong> Choisissez une tâche que vous souhaitez accomplir. Réglez un minuteur sur une période de 25 minutes, appelée "pomodoro". Pendant cette période, concentrez-vous uniquement sur la tâche choisie.</li>
                    <li><strong>Travail intense :</strong> Travaillez intensément sur la tâche jusqu'à ce que le minuteur sonne, indiquant la fin du premier pomodoro.</li>
                    <li><strong>Pause courte :</strong> Accordez-vous une courte pause de 5 minutes. Utilisez ce temps pour vous détendre, vous étirer ou prendre une courte pause mentale.</li>
                    <li><strong>Répétition :</strong> Répétez le cycle. Après avoir complété quatre pomodoros, accordez-vous une pause plus longue d'environ 15 à 30 minutes.</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
  )
}
