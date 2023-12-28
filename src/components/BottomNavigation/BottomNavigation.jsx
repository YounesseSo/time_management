import styles from './BottomNavigation.module.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { Link } from 'react-router-dom'

export default function BottomNavigation({previous , next}) {
  return (
    <div className={styles.container}>
        <Link className={styles.link} to={previous.path}>
          <FaArrowLeft size={20}/>
          {previous.name}
        </Link>

        <Link className={styles.link} to={next.path}>
          {next.name}
          <FaArrowRight size={20}/>
        </Link>
    </div>
  )
}
