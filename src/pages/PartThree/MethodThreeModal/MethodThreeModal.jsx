import { IoClose } from "react-icons/io5";
import styles from '../Modal.module.css';

export default function MethodThreeModal({setShowModal}) {
  return (
    <div className={styles.container}>
        <div className={styles.inner_container}>

            <div className={styles.header}>
                <h1>La matrice d’Eisenhower</h1>
                <button onClick={()=>setShowModal(false)}>
                    <IoClose size={29}/>
                </button>
            </div>

            <div className={styles.body}> 
                <div className={styles.image}>
                    <img src="/eisenhower-matrice.png" alt="eisenhower matrice" />
                </div>
                <p>
                    La 1ère méthode que nous allons vous présenter est une méthode relativement connue car elle a été inventée par le 34ème président des Etats-Unis, David Dwight Eisenhower.
                </p>
            </div>
        </div>
    </div>
  )
}
