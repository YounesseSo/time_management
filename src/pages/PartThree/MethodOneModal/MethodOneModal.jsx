import React from 'react';
import { IoClose } from "react-icons/io5";
import styles from '../Modal.module.css';

export default function MethodOneModal({setShowModal}) {
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
                    <img src="/matrice-eisenhower.webp" alt="eisenhower matrice" />
                </div>
                <p>
                    La 1ère méthode que nous allons vous présenter est une méthode relativement connue car elle a été inventée par le 34ème président des Etats-Unis, David Dwight Eisenhower.
                    <br />
                    <br />
                    Dans sa matrice, Eisenhower découpe les tâches en 4 segments :

                    <ul>
                        <li>urgent et important : à traiter en priorité</li>
                        <li>important, mais pas urgent : à planifier pour plus tard</li>
                        <li>urgent, mais pas important : à déléguer</li>
                        <li>ni urgent ni important : à supprimer ou limiter</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
  )
}
