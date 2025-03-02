import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from './../../firebase/firebase.init';



const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Registration form submitted');

        const userName = e.target.UserName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName ,email, password);

        createUserWithEmailAndPassword(auth , email, password)
        .then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error.message);
        })
    }



    return (
        <div className="login bg-gray-700 p-10 w-1/2 mx-auto rounded-lg mt-10 ">
            <h1 className="text-3xl mb-8">Registration new account</h1>
            <div className="text-left p-10 bg-gray-800 rounded-lg">
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white">UserName</label>
                        <input type="text" placeholder="UserName" name="UserName" id="UserName" className="w-full p-2 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input type="email" placeholder="example@mail.com" name="email" id="email" className="w-full p-2 rounded-lg" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" id="password" className="w-full p-2 rounded-lg" />
                        {/* {
                            showPassword ? <FaEyeSlash className="absolute right-4 top-9 text-white" /> : <FaEye className="absolute right-4 top-9 text-white" />
                        } */}
                        <button onClick={() => {setShowPassword(!showPassword)}}  type="button">
                            {
                                showPassword ?  <FaEye className="absolute right-4 top-9 text-white" /> : <FaEyeSlash className="absolute right-4 top-9 text-white" />
                            }
                        </button>
                    </div>
                    <button className="btn btn-primary w-full">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;