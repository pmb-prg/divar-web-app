import { e2p } from "src/utils/number"
import styles from "./Main.module.css"
import Loader from "../modules/Loader";
import { Spinner } from "@nextui-org/react";

function Main({data}) {
    const baseURL = import.meta.env.VITE_BASE_URL;
    if(!data) return <Loader />
  return (
    <div className={styles.container}>
        {data && data.map((i) => (<div key={i._id} className={styles.post}>
            <div className={styles.description}>
                <p className=" font-bold">{i.options.title}</p>
                <div>
                    <p className=" text-sm">{e2p(i.amount.toLocaleString())} تومان</p>
                    <span className=" text-sm text-gray-400">{i.options.city}</span>
                </div>
            </div>
            <div className={styles.image}>
                <img src={`${baseURL}${i.images}`} alt={i.options.tite} />
            </div>
        </div>))}
    </div>
  )
}

export default Main