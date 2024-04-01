import { Button, Chip, Divider, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { sendOtp } from "services/auth";

function SendOtpForm({ setMobile, mobile, setStep }) {
  const [valid, setValid] = useState(false);


  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) setValid(true);

    const {response, error} = await sendOtp(mobile)
    
    if (response) setStep(2)
    if (error) console.log(error.response.data.message)
    console.log({response, error})
  }

  const changeHandler = (e) => {
      setMobile(e.target.value)
  }

  return (
    <form onSubmit={submitHandler} className=" flex flex-col h-3/4 justify-evenly sm:border rounded-lg p-7 relative lg:w-2/5 sm:w-3/5 w-full">
      <p className=" text-xl font-bold">ورود به حساب کاربری</p>
      <Divider />
      <p className=" text-lg">شماره موبایل خود را وارد بکنید</p>
      <span className=" opacity-50">
        برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد
      </span>

      <div className=" relative w-full">
      <Input 
        isInvalid={valid} 
        errorMessage={valid && "لطفا شماره موبایل را وارد کنید!"}
        variant="bordered" 
        radius="sm" 
        type="text" 
        id="input" 
        placeholder="شماره موبایل" 
        value={mobile} 
        onChange={changeHandler} >
        </Input>
        <Chip size="md" className=" absolute left-2 top-1.5 text-[#a62626]" variant="flat">98+</Chip>
      </div>

      <Divider />
      <div className=" w-full flex justify-end">
      <Button className=" bg-[#a62626] text-white w-24 h-10 relative" radius="sm" type="submit">ارسال کد تایید</Button>
      </div>
    </form>
  )
}

export default SendOtpForm