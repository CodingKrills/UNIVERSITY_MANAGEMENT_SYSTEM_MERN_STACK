import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { login } from '../../redux/actions/adminAction'
import './LoginForm.css'

const LoginForm = () => {

    // * use navigate 
    const navigate = useNavigate();

    // * Use Dispatch Initialization
    const dispatch = useDispatch()

    // * ==== get user state 
    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, userInfo, message } = adminLogin;

    // * USE EFFECT REDIRECT TO DASH BOARD 
    useEffect(() => {
        if (userInfo) {
            if (userInfo.is_admin === true) {
                navigate("/admin/dashboard");
            } else if (userInfo.is_teacher === true) {
                navigate("/teacher/dashboard");
            } else if (userInfo.is_student === true) {
                navigate("/student/dashboard");
            } else {
                navigate("/");
            }
        }
    }, [navigate, userInfo])

    // * ========================

    // * REACT HOOK FORM 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        alert(JSON.stringify(data))
        dispatch(login(data.admin_cnic, data.password, data.access_as))
    };

    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div className="container">
            <h1><b>LOG IN</b></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="fname">CNIC</label>
                <input type="text" name="admin_cnic" placeholder="Your cnic ..."
                    {...register("admin_cnic", { required: true })}
                />
                <div className="error">{errors.admin_cnic && <span>This field is required</span>}</div>
                <label for="lname">PASSWORD</label>
                <input type="password" name="password" placeholder="Your Password ..."
                    {...register("password", { required: true })}
                />
                <div className="error">{errors.password && <span>This field is required</span>}</div>

                <label>YOU ARE ?</label>
                <select name="access_as"
                    {...register("access_as")}
                >
                    <option value="student">STUDENT</option>
                    <option value="teacher">TEACHER</option>
                    <option value="admin">ADMIN</option>
                </select>

                <input type="submit" value="Submit" />

                {error ? <>
                    <div className="error-alert">IN CORRECT CREDENTIALS !</div>
                </> : <></>}

            </form>
        </div>
    )
}

export default LoginForm
