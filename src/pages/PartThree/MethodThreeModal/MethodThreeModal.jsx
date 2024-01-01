import { IoClose } from "react-icons/io5";
import styles from '../Modal.module.css';

export default function MethodThreeModal({setShowModal}) {
  return (
    <div className={styles.container}>
        <div className={styles.inner_container}>

            <div className={styles.header}>
                <h1>La méthode de Blocage de temps</h1>
                <button onClick={()=>setShowModal(false)}>
                    <IoClose size={29}/>
                </button>
            </div>

            <div className={styles.body}> 
                <div className={styles.image}>
                    <img src="/time-blocking.png" alt="eisenhower matrice" />
                </div>
                <p>
                    La méthode de blocage de temps, également appelée "time blocking" en anglais, est une technique de gestion du temps qui consiste à diviser votre journée en blocs de temps dédiés à des tâches spécifiques. Voici comment cette méthode fonctionne :
                    <br />
                    <ul>
                        <li><strong>Planification : </strong>Commencez par planifier votre journée à l'avance. Identifiez les tâches importantes que vous devez accomplir.</li>
                        <li><strong>Blocage des plages horaires : </strong>Divisez votre journée en blocs de temps. Chaque bloc correspond à une période dédiée à une tâche particulière. Par exemple, vous pourriez avoir un bloc de 9h à 11h pour travailler sur un projet, suivi d'un bloc de 11h à 12h pour répondre aux emails.</li>
                        <li><strong>Focalisation totale :</strong>  Pendant chaque bloc de temps, concentrez-vous uniquement sur la tâche prévue. Éliminez les distractions et consacrez toute votre énergie à cette activité spécifique.</li>
                        <li><strong>Pause entre les blocs : </strong> Prévoyez des pauses entre les blocs de temps pour vous détendre et recharger vos batteries. Cela contribue à maintenir une productivité élevée sur la durée de la journée.</li>
                    </ul>

                </p>
            </div>
        </div>
    </div>
  )
}
