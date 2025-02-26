import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const RightNavbar = () => {
    return (
        <div>
            <section className="login">
                <h2 className="font-bold mb-4  text-left">Login With</h2>
                <div className="flex flex-col gap-2">
                    <button className="btn bg-none border-green-500 rounded-base border gap-2 items-center text-base font-semibold">
                        <FaGoogle /> Login With Google
                        </button>
                    {/* <button className="btn btn-neutral rounded-base gap-2 items-center text-lg font-semibold">Facebook</button> */}
                    <button className="btn bg-none border-blue-500 rounded-base border gap-2 items-center text-base font-semibold">
                        <FaGithub /> Login With Github
                        </button>
                </div>
            </section>
            <section className="find mt-12">
                <h2 className="font-bold mb-4 text-left">Find Us On</h2>
                <div className="flex flex-col text-left">
                    <button className="btn bg-none border border-gray-600 rounded-base gap-2 items-center text-base font-semibold"> <FaFacebook /> Facebook</button>
                    <button className="btn bg-none border border-gray-600 rounded-base gap-2 items-center text-base font-semibold"> <FaTwitter /> Twitter</button>
                    <button className="btn bg-none border border-gray-600 rounded-base gap-2 items-center text-base font-semibold"><FaInstagram /> Instagram</button>
                </div>
            </section>
            <section className="g-zone">
                
            </section>
            <section className="ads">

            </section>
        </div>
    );
};

export default RightNavbar;