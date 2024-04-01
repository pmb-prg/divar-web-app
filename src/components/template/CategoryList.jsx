import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllCategory, removeCategory } from "src/services/admin"
import Loader from "../modules/Loader";
import { Button, Divider } from "@nextui-org/react";
import styles from './CategoryList.module.css'
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

//---------------------------------------------------------------
function CategoryList() {
    //-------------------------data------------------------------
    const queryClient = useQueryClient()
    const [loading, setLoading] = useState(false)
    const {data, isLoading} = useQuery(["get-all-category"],getAllCategory);
    const  { mutate }  = useMutation(["remove-category"], removeCategory ,{
        onSuccess: () => queryClient.invalidateQueries("get-all-category")
    });
    //------------------------event------------------------------
    const clickHandler = (e) => {
        mutate(e.target.value)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    //-------------------------jsx-------------------------------
    if(isLoading) return <Loader />
  return (
    <div className={styles.container}>
        <h3>دسته بندی ها</h3>
        <Divider className="my-4" />
{/* ------------------------------------------------------------------ */}
        <div className={styles.list}>
            {data.res.data.map((i) => <div key={i._id} className={styles.item}>
                <img src={`${i.icon}.svg`} />
                <h4>{i.name}</h4>
                <p>slug: {i.slug}</p>
                <Button 
                className="bg-[#a62626] text-white rounded-md" 
                onClick={clickHandler} 
                value={i._id} >
                    <FaTrashAlt />
                </Button>
            </div>)}
        </div>
    </div>
  )
}

export default CategoryList