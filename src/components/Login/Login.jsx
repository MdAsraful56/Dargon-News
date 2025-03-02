import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('login');

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Login successfull');
        }).catch(error => {
            console.log(error.message);
            toast.error(error.message);
        })
    }



    return (
        <div className="login bg-gray-700 p-10 w-1/2 mx-auto rounded-lg mt-10 ">
            <h1 className="text-3xl mb-8">Login your account</h1>
            <div className="text-left p-10 bg-gray-800 rounded-lg">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input type="email" name="email" id="email" className="w-full p-2 rounded-lg" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" id="password" className="w-full p-2 rounded-lg" />
                        {/* {
                            showPassword ? <FaEyeSlash className="absolute right-4 top-9 text-white" /> : <FaEye className="absolute right-4 top-9 text-white" />
                        } */}
                        <button onClick={() => {setShowPassword(!showPassword)}}  type="button">
                            {
                                showPassword ?  <FaEye className="absolute right-4 top-9 text-white" /> : <FaEyeSlash className="absolute right-4 top-9 text-white" />
                            }
                        </button>
                    </div>
                    <button className="btn btn-primary w-full">Login</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;