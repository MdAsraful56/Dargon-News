import {  NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
// import userIcon from '../../assets/user.png'


const Navbar = () => {

    const nav = <>
        <NavLink to="/" className="btn btn-ghost">Home</NavLink>
        <NavLink to="/about" className="btn btn-ghost">About</NavLink>
        <NavLink to="/career" className="btn btn-ghost">Career</NavLink>
    </>


    return (
        <div className="flex justify-between ">
            <div className=""></div>
            <div className="nav">
                {nav}
            </div>
            <div className="lgoin flex flex-row items-center gap-2">
                {/* <img src={userIcon} alt="" /> */}
                <CgProfile className="text-3xl" />
                <button className="btn btn-neutral rounded-base gap-2 items-center text-lg font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;