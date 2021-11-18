import { useFormik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router'
import * as yup from "yup";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validatinSchema = yup.object({
    fullname: yup.string().min(3, "Please enter your real name").required("Full name is requied"),
    email: yup.string().email("Please enter a valid email").required(),
    password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required(),
    confirmpassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")],  "Password does not match")
    })
})

export default function SignUp() {
    const history =useHistory()
    const switchToSignIn = ()=> {
        history.push('/')
    }
    const onSubmit = (values)=> {
        alert(JSON.stringify(values));
    }
    const formik = useFormik( {initialValues : {fullname:"", email:"", password:"", confirmpassword:""},
       validateOnBlur: true,
       onSubmit,
       validationSchema: validatinSchema,
    } );


    console.log("Error:", formik.errors )

    return (
        <>
        <div className="main-login-container d-flex justify-content-center align-items-center">
            <div 
                className="register-container col-sm-12 col-lg-4 col-md-6 shadow-lg p-5 d-flex flex-column justify-content-between" onSubmit={formik.handleSubmit}>
                <h2 className="reg-text text-dark fs-1">Register</h2>
                <input 
                className="input-name input p-2" 
                name="fullname" 
                placeholder="Full Name" 
                value={formik.values.fullname} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                type="name"
            />
            <span className="error">{formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname:""}</span>

                <input 
                    className="input p-2" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    type="email"
                    onBlur={formik.handleBlur}
                />
            <span className="error">{formik.touched.email && formik.errors.email ? formik.errors.email:""}</span>

                <input 
                    className="input p-2" 
                    name="password" 
                    placeholder="Password" 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    type="password"
                />
            <span className="error">{formik.touched.password && formik.errors.password ? formik.errors.password:""}</span>

                <input 
                    className="input p-2" 
                    name="confirmpassword" 
                    placeholder="Confirm Password" 
                    value={formik.values.confirmpassword} 
                    onChange={formik.handleChange} 
                    type="password"
                    onBlur={formik.handleBlur}
                />
            <span className="error">{formik.touched.confirmpassword && formik.errors.confirmpassword ? formik.errors.confirmpassword:""}</span>

                <button 
                    className="btn login-btn mt-3" 
                    type="submit" onClick={formik.handleSubmit}>Register</button>
                <p className="register-text mt-3">
                        Already have an Account?
                        <span className="register spant" onClick={switchToSignIn}> SignIn</span>
                    </p>
            </div>
        </div>
    </>
    )
}
