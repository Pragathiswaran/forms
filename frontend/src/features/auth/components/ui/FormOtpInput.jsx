import React, { useEffect, useRef } from 'react'
import Input from '../../../../components/ui/Input'

const FormOtpInput = ({length, value, onChange, onSubmit}) => {
    const inputRef = useRef([])

    useEffect(() => inputRef.current[0]?.focus(),[])

    const handleOnChange = (index,e) => {
        const inputValue = e.target.value;

        if(isNaN(inputValue)) return;

        const newOtp = [...value]
        newOtp[index] = inputValue.substring(inputValue.length - 1)

        onChange(newOtp)

        if(inputValue && index < length - 1 && inputRef.current[index + 1]){
            inputRef.current[index + 1]?.focus()
            inputRef.current[newOtp.indexOf("")]?.focus()
        }

        const combinedOtp = newOtp.join('')

        if(combinedOtp.length === length){
            setTimeout(()=>{
              onSubmit();
              inputRef.current[0]?.focus();
            }, 500)
        }
    }

    const handleOnClick = (index) =>{
        inputRef.current[index]?.setSelectionRange(1,1)

        if(index > 0 && !value[index - 1]){
            inputRef.current[value.indexOf("")]?.focus()
        }
    }

    const handleOnKeyDown = (index,e) => {
        if(e.key === "Backspace" && !value[index] && index > 0 && inputRef.current[index - 1]){
            inputRef.current[index - 1]?.focus()
        }
    }

  return (
    <>{value.map((digits, index)=>(
          <Input text={"text"}
            key={index}
            style={"otp"}
            value={digits}
            ref = {(input) => inputRef.current[index] = input}
            onChange = {(e) => handleOnChange(index,e)}
            onClick = {() => handleOnClick(index)}
            onKeyDown = {(e) => handleOnKeyDown(index,e)}
          />
        ))}
    </>
  )
}

export default FormOtpInput