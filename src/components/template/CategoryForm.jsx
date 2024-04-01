import { Button, Divider, Input } from "@nextui-org/react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { createCategory } from "src/services/admin";
import NotifForm from "src/shared/NotifForm";

const formStyles = "flex flex-col items-start sm:border sm:w-3/4 w-full p-4 rounded my-6";

function CategoryForm() {
    //-------------------states-----------------------------
    const [isNotif, setIsNotif] = useState(false)
    const [ form, setForm ] = useState({name: "", slug: "", icon: ""})
    const [nameValid, setNameValid] = useState(false);
    const [iconValid, setIconValid] = useState(false);
    const queryClient = useQueryClient()
    const {mutate, isLoading, error, data} = useMutation(createCategory, {
        onSuccess: () => queryClient.invalidateQueries("get-all-category"),
    })
    //-------------------event handler ---------------------
    const changeHandler = (event) =>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(!form.name || !form.icon){
            if(!form.name) setNameValid(true)
            if(!form.icon) setIconValid(true)
            setIsNotif(false)
            return
        }
        mutate(form)
        setIsNotif(true)
        setTimeout(() => {
            setIsNotif(false)
        }, 9000)
    }
    //------------------jsx---------------------------------
  return (
    <form 
    className={formStyles} 
    onChange={changeHandler} 
    onSubmit={submitHandler}>
        {isNotif && data?.status === 201 && <NotifForm message={data.data.message}/>}
        {/* <NotifForm status={data?.status}/> */}
        {/* //------------------------------------------ */}
        <h3 className=" text-xl text-center border-b-4 border-[#a62626]">دسته بندی جدید</h3>
        <Divider className="my-2" />
        {}
        {/* //------------------------------------------ */}
        <div className=" my-4 w-full">
            <label htmlFor="name">نام دسته بندی:<span className=" text-red-500">*</span></label>
            <Input 
            isInvalid={nameValid} 
            errorMessage={nameValid && "لطفا نام دسته بندی را بنویسید!"}
            type="text" 
            name="name" 
            variant="bordered" 
            placeholder="نام" 
            radius="sm" 
            className=" sm:w-1/2" />
        </div>
        {/* //-------------------------------------------- */}
        <div className=" my-4 w-full">
            <label htmlFor="slug">اسلاگ:</label>
            <Input 
            type="text" 
            name="slug" 
            variant="bordered" 
            placeholder="اسلاگ" 
            radius="sm" 
            className=" sm:w-1/2" />
        </div>
        {/* //--------------------------------------------- */}
        <div className=" my-4 w-full">
            <label htmlFor="icon"> انتخاب آیکون:<span className=" text-red-500">*</span></label>
            <Input 
            isInvalid={iconValid} 
            errorMessage={iconValid && "لطفا نام آکون را بنویسید!"}
            type="text" 
            name="icon" 
            variant="bordered" 
            placeholder="آیکون" 
            radius="sm" 
            className=" sm:w-1/2" />
        </div>
        {/* //------------------------------------------------ */}
        <Divider  className="my-2" />
        <div className=" my-4 w-full flex justify-end">
            <Button 
            type="submit" 
            className="bg-[#a62626] text-white rounded"
            isLoading={isLoading}>
                ایجاد
            </Button>
        </div>
    </form>
  )
}

export default CategoryForm

