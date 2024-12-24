import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


 const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


const UserAxiosSecure = () => {
    const navigate = useNavigate()
    const { SingOut }=useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res => {
            return res
        }, async error => {
            console.log('error ', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                //logout 
                // SingOut()
                //navigate
                // navigate('/login')
            }
        })
    },[SingOut, navigate])
    return axiosSecure
   
};

export default UserAxiosSecure;