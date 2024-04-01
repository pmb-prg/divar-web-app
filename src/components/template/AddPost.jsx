import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllCategory } from 'src/services/admin'
import { useState } from 'react'
import { TbCameraPlus } from "react-icons/tb";
import { getCookie } from 'utils/cookie';
import axios from 'axios';
import NotifForm from 'src/shared/NotifForm';

function AddPost() {
  //-----------------------------data----------------------------------------
  const { data } = useQuery(["get-all-category"], getAllCategory);
  const [image, setImage] = useState(null);
  const [notif, setNotif] = useState(false)
  const [message, setMessage] = useState("")
  const [form, setForm] = useState({
    title: "",
    content: "",
    city: "",
    category: "",
    amount: null,
    images: null,
  })
  //-----------------------------event---------------------------------------
  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images"){
      setForm({...form, [name]: event.target.value})
    } else{
      const file = event.target.files[0];
      const reader = new FileReader();
      setForm({...form, [name]: file})
    //________________________show user post Photo in web___________________
      reader.onload = () => {
        setImage(reader.result);
      };
      if(file){
        reader.readAsDataURL(file);
      }
    }

  }
  const addHandler = (event) => {
    event.preventDefault()
    const formData = new FormData();
    for(let i in form){
      formData.append(i, form[i])
    }
    //__________________send data form to api________________________
    const token = getCookie("accessToken")
    axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData,{
      headers:{
        "Content-Type": "multipart/form-data",
      Authorization: `bearer ${token}`
      }
    })
    .then((res) => {
      setMessage(res.data.message);
      setNotif(true);
      setTimeout(() => {
        setNotif(false)
      }, 9000)
    })
    .catch(error => console.log(error))
  }
  //-----------------------------jsx-----------------------------------------
  return (
    <form className=' md:w-1/2 w-full flex flex-col md:border md:p-4 rounded-lg' onSubmit={addHandler} onChange={changeHandler}>
        <h3 className=' text-xl font-bold border-b-2 border-b-[#a62626] py-5 mb-5'>افزودن پست</h3>
{/* ______________________________________________________________________ */}
            <label htmlFor='title'>عنوان:</label>
            <Input 
            type='text' 
            name='title' 
            className='mb-5' 
            id='title'/>
        
{/* ______________________________________________________________________ */}

          <label htmlFor='content'>توضیحات:</label>
          <Textarea 
          name='content' 
          className='mb-5' 
          id='content'/>
{/*_________________________________________________________________________ */}
        
          <label htmlFor='amount'>مبلغ:</label>
          <Input 
          type='number' 
          name='amount' 
          className='mb-5' 
          id='amount' 
          />
{/*_________________________________________________________________________ */}

          <label htmlFor='city'>شهر:</label>
          <Input 
          type='text' 
          name='city' 
          className='mb-5' 
          id='city'/>
{/*_________________________________________________________________________ */}

        <label htmlFor='category'>دسته بندی:</label>
        <Select id='category' size='md' name='category' onChange={changeHandler} className='mb-5'>
          {data?.res.data.map((i) => 
            <SelectItem 
            key={i._id} 
            value={i._id}
            className=' flex justify-center'>
              {i.name}
            </SelectItem>
          )}
        </Select>
{/*_________________________________________________________________________ */}
        <label htmlFor='images'>عکس:</label>
        <label 
        htmlFor='images' 
        className=' w-36 h-36 border-2 border-dashed rounded-md flex justify-center items-center text-5xl mb-5 cursor-pointer p-1'>
          {form.images === null ?<TbCameraPlus /> : <img src={image} className='w-full rounded-md' />}
        </label>
        <input id='images' name='images' type='file' className=' hidden' />
        
{/*_________________________________________________________________________ */}
        <div>
          <Button type='submit' className=' bg-[#a62626] text-white rounded-md'>افزودن</Button>
        </div>
        {notif && <NotifForm message={message} />}
    </form>
  )
}

export default AddPost