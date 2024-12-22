import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className='flex justify-center items-center text-center'>
                <span className="loading loading-bars loading-lg "></span>
            </div>
        );
    }
    if (!user) {
        return <Navigate to={"/login"}></Navigate>;
    }
    return children;
};

export default PrivetRoute;