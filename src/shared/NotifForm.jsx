import { BsCheckCircleFill } from "react-icons/bs";
import styles from './NotifForm.module.css'


function NotifForm({message}) {

  return (
    <div className={styles.container}>
        <BsCheckCircleFill className=" ml-4" />
        <p>{message}</p>
    </div>
  )

  

}

export default NotifForm