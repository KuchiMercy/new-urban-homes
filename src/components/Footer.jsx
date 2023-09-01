import logo from '../assets/urbanLogo.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        
      <footer className="mt-8 px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 md:px-10 lg:gap-2 items-center  justify-center"
        >
        {/* Div 1 */}
        <div>
          <div className='flex justify-center'>
            <img className="" src={logo} width={100} alt="urban-house" />
          </div>
          
            <p className='text-gray-700 text-md px-4 pb-2 font-hanuman text-center'> Urban Homes is a company that provides real estate agents and home
            owners the ease of showcasng properties to potential clients and to
            recieve payment seamlessly.</p>
           
         
        </div>

        {/* Div 2 */}
        <div>
          <h2 className='text-gray-600 text-md font-bold px-4 pb-2'>About us</h2>
          <div className='text-gray-700 text-md px-4 pb-2 font-hanuman'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>News & Updates</p>
          </div>
        </div>

        {/* Div 3 */}
        <div>
          <h2 className='text-gray-600 text-md px-4 font-bold pb-2'>Quick Links</h2>
          <div className='text-gray-700 text-md px-4 pb-2 font-hanuman'>
            <p>Home</p>
            <p>Pricing</p>
            <p>Properties</p>
            <p>How It Works</p>
            <p>FAQs</p>
            <p>List Property</p>
            <p>Find Property</p>
          </div>
        </div>

        {/* div 4 */}
        <div >
          <h2 className='text-gray-600  text-md font-bold px-4 pb-2'>Contact Us</h2>
          <div className='text-gray-700 text-md px-4 pb-2 font-hanuman'>
            <p>33 Democracy Crescent Gaduwa Housing Estate, Abuja Nigeria</p>
            <p>Tel: +2341234567890</p>
            <p>Email: companyemail@here.com</p>
          </div>
          <div className='flex px-4 pb-5'>
            <div >
              <AiFillInstagram className='w-7 h-7'/>
            </div>
            <div>
              <FaFacebookF className='w-7 h-7' />
            </div>
            <div>
              <BiLogoLinkedin className='w-7 h-7' />
            </div>
            <div>
              <BsTwitter className='w-7 h-7' />
            </div>
          </div>
        </div>
        
      </footer>
      <div className='md:w-screen lg:w-screen'>
          <p className='text-white bg-slate-900 text-md px-4 py-3  font-hanuman box-border text-center'>Copyright 2023</p>
          </div>
    </div>
  );
};

export default Footer;
