import React, {useState} from 'react'
import { useHistory } from 'react-router'
import './App.css'

export default function Login() {
    const [loginss, setloginss] = useState({email:"", password:""})
    const history= useHistory()
    const switchToSignup =()=> {
        history.push('/register')
    }
    const changers =(e)=> {
        setloginss({...loginss, [e.target.name]:e.target.value})
    }
    const loger=()=> {
        if (loginss.email==="admin" && loginss.password==="admin") {
            history.push('/admin')
        } else if (loginss.email==="user" && loginss.password==="user") {
            history.push('/user')
        }
    }
    return (
        <>
            <div className="main-login-container d-flex justify-content-center align-items-center">
                <div className="login-container col-sm-12 col-lg-4 col-md-6 shadow-lg p-5 d-flex flex-column justify-content-center">
                    <h2 className="text-dark fs-1 mb-3">SignIn</h2>
                    <input className="input p-2 mb-4 mt-2" value={loginss.email} name="email" onChange={changers} placeholder="Email address" type="name"/>
                    <input className="input p-2" id="password" value={loginss.password} name="password" onChange={changers} placeholder="Password" type="Password"/>
                    <button className="btn login-btn mt-3" onClick={loger}>Login</button>
                    <p className="register-text mt-2">
                        Don't have an Account?
                        <span className="register spant" onClick={switchToSignup}> Register</span>
                    </p>
                </div>
            </div>
        </>
    )
}