import {motion} from 'framer-motion'
import {AiOutlineHome} from 'react-icons/ai'
import {PiNotepadBold} from 'react-icons/pi'
import {BsTelephone} from 'react-icons/bs'
import {FaCoins} from 'react-icons/fa'
const Choose = () => {
  return (
    <div>
        <div className='text-gray-600 text-center text-xl font-bold pb-2 my-6'>
            <h1>Why Choose Us </h1>
        </div >
        <div
        
        className='grid grid-cols-1 mt-2 items-center px-4 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-4 lg:gap-4 mb-8 mx-6 '>
        {/* div 1 */}
        <motion.div
        whileHover={{textShadow:"0px 0px 8px rgb(255,255,255", boxShadow: "0px 0px 8px rgb(255,255,255"}}
        className='shadow-xl'>
            <div className='text-yellow-400 text-4xl flex justify-center'><AiOutlineHome /></div>
            <div>
                <h5 className='text-gray-600 text-center text-lg font-bold pb-2'>Property Showcase</h5>
                <p className='text-gray-700 text-center text-md pb-2 font-hanuman'>Agents and homeowners can upload photos and description of their properties.</p>
            </div>
        </motion.div>

        {/* div 2 */}
        <motion.div
        whileHover={{textShadow:"0px 0px 8px rgb(255,255,255", boxShadow: "0px 0px 8px rgb(255,255,255"}}
        className='shadow-xl'>
            <div className='text-purple-700 text-4xl flex justify-center'><PiNotepadBold /></div>
            <div>
                <h5 className='text-gray-600 text-center text-lg font-bold pb-2'>Lease Management</h5>
                <p className='text-gray-700 text-center text-md pb-2 font-hanuman'>Agents can set lease prices, receive payments on time, and track their inventory of properties.</p>
            </div>
        </motion.div>

        {/* div 3 */}
        <motion.div
        whileHover={{textShadow:"0px 0px 8px rgb(255,255,255", boxShadow: "0px 0px 8px rgb(255,255,255"}}
        className='shadow-xl'>
            <div className='text-teal-300 text-4xl flex justify-center'><BsTelephone /></div>
            <div>
                <h5 className='text-gray-600 text-center text-lg font-bold pb-2'>Easy Communication</h5>
                <p className='text-gray-700 text-center text-md pb-2 font-hanuman'>Users can easily communicate with potential clients through the platform.</p>
            </div>
        </motion.div>

        {/* div 4 */}
        <motion.div
        whileHover={{textShadow:"0px 0px 8px rgb(255,255,255", boxShadow: "0px 0px 8px rgb(255,255,255"}}
        className='shadow-xl'>
            <div className='text-purple-500 text-4xl flex justify-center'><FaCoins /></div>
            <div>
                <h5 className='text-gray-600 text-center text-lg font-bold pb-2'>Secure Payments</h5>
                <p className='text-gray-700 text-center text-md pb-2 font-hanuman'>The platform uses secure payment systems to ensure safe transactions.</p>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Choose