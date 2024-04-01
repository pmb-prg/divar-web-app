import { Listbox, ListboxItem } from "@nextui-org/react"
import { useNavigate, Link } from "react-router-dom";
import { clearCookie } from "src/utils/cookie";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";


function ListBox() {
    const { data } = useQuery(["profile"], getProfile);
    
    const navigate = useNavigate()
    const deleteHandler = () => {
        clearCookie()
        setTimeout(() => {
            navigate('/auth')
            window.location.reload()
        }, 1000)
    }
  return (
    <Listbox aria-label="Actions"
     className=" w-32 rounded-sm p-0" >
              
        {document.cookie.length === 0 && <ListboxItem 
        className=" rounded-sm" 
        key="new">
          <Link 
          to="/auth">
            ورود
          </Link>
        </ListboxItem>}
{/*--------------------------------------------------------------*/}
        {data.data?.role === "ADMIN" && <ListboxItem 
        className=" rounded-sm">
          <Link to="/admin">
            ادمین
          </Link>
        </ListboxItem>}
{/*--------------------------------------------------------------*/}
        <ListboxItem 
        className=" rounded-sm">
          <Link to="/dashboard">
            داشبورد
          </Link>
        </ListboxItem>
{/*--------------------------------------------------------------*/}

        <ListboxItem className=" rounded-sm" key="copy">ثبت آگهی</ListboxItem>
{/*--------------------------------------------------------------*/}

        {document.cookie.length !== 0 && <ListboxItem 
        onClick={deleteHandler} 
        className="text-danger rounded-sm">
          خروج
        </ListboxItem>}
    </Listbox>
  )
}

export default ListBox