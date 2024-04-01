import { Button, Divider, Input } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { checkOtp } from "services/auth"
import { setCookie } from "utils/cookie"

function CheckOtpForm({code, setCode, mobile, setStep}) {
    const [valid, setValid] = useState(false)

    const navigate = useNavigate()


    const submitHandler = async event => {
        event.preventDefault()
        if (code.length !== 5) setValid(true)

        const {response, error } = await checkOtp(mobile, code)
        if(response) {
            setCookie(response.data)
            navigate("/")
        } if (error) {
            console.log(error.response.data.message)
        }
    }
  return (
    <form onSubmit={submitHandler} className=" flex flex-col h-3/4 justify-evenly sm:border rounded-lg p-7 relative sm:w-2/5 w-full">
        <p className=" text-xl font-bold">تایید کد اس ام اس شده</p>
        <Divider />
        <p>کد تایید را وارد کنید</p>
        <span className=" text-sm opacity-65">کد پیامک شده به شماره {mobile} را وارد کنید! </span>

        <Input 
        className=" transition-all"
        isInvalid={valid} 
        errorMessage={valid && "کد تایید را درست وارد کنید."}
        variant="bordered" 
        radius="sm" 
        type="text" 
        id="input" 
        placeholder="کد تایید" 
        value={code} 
        onChange={e => setCode(e.target.value)}/>

        <Divider />
        <div className=" w-full flex flex-row-reverse justify-between items-center">
            <Button type="submit" className=" bg-[#a62626] text-white">ورود</Button>
            <Button onClick={() => {setStep(1); setCode("")}}>تغییر شماره موبایل</Button>
        </div>
    </form>
  )
}

export default CheckOtpForm