

const Login = () => {
    return (
        <div className="login bg-gray-700 p-10 w-1/2 mx-auto rounded-lg">
            <h1 className="text-3xl mb-8">Login your account</h1>
            <div className="text-left p-10 bg-gray-800 rounded-lg">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input type="email" name="email" id="email" className="w-full p-2 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="password" name="password" id="password" className="w-full p-2 rounded-lg" />
                    </div>
                    <button className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;