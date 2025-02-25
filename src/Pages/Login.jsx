import React from 'react';
import loginImg from '../../src/assets/Login-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
const Login = () => {
    const axiosSecure = UserAxiosSecure()
    const navigate = useNavigate()
    const { userLogin, GoogleLogin } = useContext(AuthContext)
    const handelLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                console.log(' user login in success', result.user);
                const user = {email : email}
                axiosSecure.post('/jwt', user)
                .then(data =>{
                    console.log(data.data);
                    navigate('/')
                })
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const handelGoogleLogin =()=>{
        GoogleLogin()
        .then(result => {
            console.log(' google login success ', result.user);
            navigate('/')
        })
        .catch(err =>{
            console.log(err.message);
        })
    }
    return (
        <div className='lg:flex-row flex-col flex justify-between'>
            <div >
                <motion.img 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.8,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }}
                src={loginImg} alt="" className='' />
            </div>
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.8,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1
                }}
            className='flex-1'>
                <form onSubmit={handelLogin} className="card-body mt-24">
                    <div className="divider"><span className='text-4xl font-bold'>Sign In</span></div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p >your are  Now user please <Link to={'/register'} className=" text-[#DC86D4] "> Register Now!
                    </Link>  </p>
                    
                    <div className=" mt-6 flex flex-col lg:flex-row justify-self-start lg:gap-10 gap-4">
                        <button className="btn   px-28 btn-outline btn-info py-4">Login</button>
                        <button onClick={handelGoogleLogin} className="btn   px-28 btn-outline btn-info py-4">Google LogIn</button>
                    </div>
                   
                </form>
            </motion.div>
        </div>
    );
};

export default Login;