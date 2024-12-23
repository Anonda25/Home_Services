import React, { useState } from 'react';
import { motion } from "motion/react"
import loginImg from '../../src/assets/register.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate()
    const { userRegister, GoogleLogin }=useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");
    const handelRegister=(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value; 
        const newUser = { email, password, name, photo,  }
        console.log(newUser);
        if (password.length < 6) {
            setErrorMessage("please type 6 careact");
            return;
        }
        const isValidPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!isValidPassword.test(password)) {
            setErrorMessage(
                "please type one upercase and one lowercase and one splical chareact"
            );
            return;
        }
        userRegister(email, password, name, photo,)
        .then(data => {
            console.log('user register success',data.user);
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handelGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(' google login success ', result.user);
                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='lg:flex-row flex-col flex justify-between'>

            <motion.div initial={{ x: -100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1
                }} className='flex-1'>
                <form onSubmit={handelRegister} className="card-body mt-24">
                    <div className="divider"><span className='text-4xl font-bold'>Register Now</span></div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Photo URl" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        {
                            errorMessage && 'please type 6 / a-z '
                        }
                    </div>
                    <p >You are  Creacte a Account please <Link to={'/login'} className=" text-[#DC86D4] "> Login Now!
                                        </Link>  </p>
                    <div className="flex gap-10 mt-6">
                        <button className="btn   px-28 btn-outline btn-info py-4">Register Now</button>
                        <button onClick={handelGoogleLogin} className="btn   px-28 btn-outline btn-info py-4">Google LogIn</button>
                    </div>
                    
                </form>
            </motion.div>
            <div className='flex-1 flex justify-center items-center'>
                <motion.img initial={{ x: 100, opacity: 0 }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }} src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Register;