import { useState } from "react"
import CheckOtpForm from "components/template/CheckOtpForm"
import SendOtpForm from "components/template/SendOtpForm"

function AuthPage() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [code, setCode] = useState("");

  return (
    <div className=" flex justify-center items-center h-[97vh]">
        {step === 1 && <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />}
        {step === 2 && <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setStep={setStep} />}
    </div>
  )
}

export default AuthPage