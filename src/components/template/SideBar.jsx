import { useEffect, useState } from "react";
import styles from "./SideBar.module.css"
import { TbBorderAll } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import { setCategory, setSlug } from "src/helper/helper";

function SideBar({data, display, setDisplay, post}) {
  //--------------------data----------------------------
  const [params, setParams] = useSearchParams()



  //-------------------event----------------------------
  const clickHandler = ((event) => {
    const newData = setCategory(event.target.id, post.data.posts)
    setParams(setSlug(event.target.id, data.res.data))
    setDisplay(newData)
  })

  const allHandler = () => {
    setParams("")
    setDisplay(post.data.posts)
  }
//-----------------------------jsx---------------------------------
  return (
    <div className={styles.container}>
      <h3>دسته بندی ها</h3>
      <div className={styles.categories}>
        <div className={styles.item} onClick={allHandler}>
          <TbBorderAll className={styles.icon}/>
          <p> همه</p>
        </div>
        {data?.res.data.map((i) => (
          <div key={i._id} className={styles.item} onClick={clickHandler} >
            <img src={`${i.icon}.svg`} id={i._id}/>
            <p id={i._id}>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar