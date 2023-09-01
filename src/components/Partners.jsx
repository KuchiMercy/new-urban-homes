import airbnb from '../assets/airbnbLogo.png';
import sheraton from '../assets/sheratonLogo.png';
import 
transcorp from '../assets/transcorpLogo.png';
import {motion} from 'framer-motion'
import alibaba from '../assets/alibabaLogo.png';
import booking from '../assets/bookingLogo.png';
import google from '../assets/google.png'


const Partners = () => {
  return (
    <div className='mt-10 '>
        <div className='text-gray-600 text-center text-xl font-bold pb-2'>Our Partnerships</div>
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{delay: 1, duration: 1}}
        className='grid grid-cols-3 mt-2 items-center px-4 md:grid-cols-6 lg:grid-cols-6 gap-2 md:px-2 lg:gap-2'>
            <img src={airbnb} width={150} alt="" />
            <img src={sheraton} width={150} alt="" />
            <img src={transcorp} width={150} alt="" />
            <img src={alibaba} width={150} alt="" />
            <img src={booking} width={150} alt="" />
            <img src={google} width={150} alt="" />
        </motion.div>
    </div>
  )
}

export default Partners