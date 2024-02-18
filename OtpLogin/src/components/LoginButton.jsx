import React, { useState } from 'react'
import OtpInput from "./otp-input";
import '../App.css'

const LoginButton = () => {
    const [login, setLogin] = useState(false)
    const [otp, setOtp] = useState(false)
    const [num, setNum] = useState("")
    const [register, setRegister] = useState(false)

    const loginHandler = () => {
        setLogin(true)
    }
    const valueHandler = (e)=> {
        setNum(e.target.value)
       
    }
    const submitHandler = (e)=> {
        e.preventDefault()

        // Phone Validatios
        const regex = /[^0-9]/g
        if(num.length !== 10 || regex.test(num)) {
            alert("Invalid Phone Number")
            setNum("")
            return;
        }
        else {
            setOtp(true)
            setLogin(false)
        }
        // console.log(num)
    }

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
        setOtp(false);
        setRegister(true) 
    };


    if(register) {
        return (
            <h2>Logged In SuccessFully!!</h2>
        )
    }

    if(!login && !otp) {
        return (
            <div className='btn'>
                <h3>Click on Login Button</h3>
                <button onClick={loginHandler}>Login</button>
            </div>
        )
    }

    if(login) {
        return (
            <form  className='btn' onSubmit={submitHandler}>
                <h3>Login with Phone</h3>
                <input onChange={valueHandler} className='num' type="text" placeholder='Enter your phone number' value={num}/>
                <br/><button type='submit'>Submit</button> <br/>
            </form>
        )
    }
  
    if(otp && !login) {
        return (
            <div>
                <h2>Enter OTP sent to {num}</h2>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>
        )
    }

}

export default LoginButton