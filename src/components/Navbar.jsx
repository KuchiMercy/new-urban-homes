import { useState } from "react";
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import icon from '../assets/urbanLogo.png'

const Navbar = () => {
    const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };
  return (
    <div>
       {/* Creat preNav */}
        

    <motion.nav 
    initial={{y: -250}}
    animate={{y: 0}}
    transition={{delay:0.2, type: 'spring', stiffness: 120 }}
    className="bg-slate-900 my-3 box-border flex justify-between md:items-center flex-wrap mt-0 py-2 px-5 fixed top-0 w-full z-10">
      <div>
        <img className="rounded-full inline" width={50} src={icon} alt="logo"  />
        </div>
      <div className={togglerNav ? "flex flex-col md:inline" : "hidden md:inline"}>
        <NavLink className="btn" onClick={clickHandler} to="/">
          Home
        </NavLink>
        <NavLink className="btn" onClick={clickHandler} to="/pricing">
          Pricing
        </NavLink>
        <NavLink className="btn" onClick={clickHandler} to="/properties">
          Properties
        </NavLink>
        <NavLink className="btn" onClick={clickHandler}  to="/how-it-works">
          How It Works
        </NavLink>
        <NavLink className="btn" onClick={clickHandler}  to="/faqs">
          FAQs
        </NavLink>
        <NavLink className="btn border-2 border-green-500 p-2" onClick={clickHandler}  to="/sign-in-up">
          Sign In/Sign Up
        </NavLink>
        <NavLink className="btn bg-green-500
         p-2 rounded border-2 border-green-500" onClick={clickHandler} to="/list-property">
          List Property
        </NavLink>
      </div>
      <button
          className=" text-3xl inline md:hidden self-start text-white outline-none "
          onClick={clickHandler}
        >
          {togglerNav ? <AiOutlineClose /> : <FaBars />}
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
