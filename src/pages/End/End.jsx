import styles from './End.module.css'
import { Link } from 'react-router-dom'
import { RxReset } from "react-icons/rx";

export default function End() {
  return (
    <div className={styles.container}>
        <h1>Merci de votre attention</h1>

        <Link to='/' className={styles.btn}>
            <RxReset/>
            Page d'Acceuil
        </Link>
    </div>
  )
}
