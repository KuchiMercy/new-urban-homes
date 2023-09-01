import lee from "../assets/leeChen.jpeg";
import {motion} from 'framer-motion'

const Testimonial = () => {
  return (
    <div>
    <div className='grid grid-cols-1 mt-2 px-4 md:grid-cols-2 lg:grid-cols-2 gap-10 md:px-4 lg:gap-4 mb-8 mx-6 py-6 '>
      <motion.div
      initial={{y: 250, opacity:0}}
      animate={{y: 0, opacity:1}}
      transition={{delay:0.5, duration:1 }}
      >
        <h4  className='text-gray-600 text-md font-bold pt-4 pb-2'>Client Testimonials</h4>
        <p className='text-gray-700 text-md pb-2 font-hanuman'>
          Do not just take our word for it, see what our clients all over
          the globe are saying about us.
        </p>

        <div className="mx-1 mt-3">
          <span className="py-2 px-2  bg-green-500 border-green-500 border-2 text-primary font-bold text-white rounded">
            List Property
          </span>
          <span className="py-2 px-3 mx-3 border-green-500 border-2 text-green-500 bg-transparent font-bold rounded">
            Find Property
          </span>
        </div>
      </motion.div>

      {/* Div2 */}
      <motion.div
      initial={{y: 250, opacity:0}}
      animate={{y: 0, opacity:1}}
      transition={{delay:0.5, duration:1 }}
      >
        <p className='text-gray-700 text-md pb-2 font-hanuman text-center'>
          Urban Homes has managed my home as a home owner in Las Vegas and I
          can say that since then the ROIs have been increasing tremendously.
          Thank you Urban Homes. I can always count on your services anytime.
        </p>
        <div className="flex justify-center">
          <img src={lee} width={50} alt="Lee-Chen" className="pb-2" />
          </div>
          <div className="text-center">
          <p className='text-gray-700 text-sm  font-hanuman'>Lee Chen</p>
          <p className='text-gray-700 text-sm font-hanuman'>Doctor</p>
          </div>
        
      </motion.div>
    </div>

    <div>
        <h5 className='text-gray-600 text-md font-bold pt-4 pb-2 text-center'>In need of our property?</h5>
        <p className='text-gray-700 text-md pb-2 font-hanuman text-center'>Trust us to offer you the best property price in the market</p>
    </div>
    <div className="flex justify-center">
        <button className="py-2 px-3 mb-4  bg-green-500 border-green-500 border-2 text-primary font-bold text-white rounded">View Pricing</button>
    </div>
    </div>
  );
};

export default Testimonial;
