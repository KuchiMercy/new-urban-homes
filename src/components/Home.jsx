import {motion} from 'framer-motion'
import house from '../assets/housePhoto.png'
const Home = () => {
  return (
    <div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around mt-20">
            <motion.div
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={{delay: 0.3, duration: 0.7}}>
                <h1 
                
                className="text-2xl md:text-2xl lg:text-3xl text-gray-600 mx-6 font-bold">
                    Find your dream <br /> home or rent out your <br /> property with <span className='text-green-500'>ease</span> 
                </h1>
                <p className="mx-6 text-gray-600 py-6 md:py-4 text-m lg:text-l font-hanuman">Set a lease price and have the rent remitted <br /> to your accounts on due dates.</p>
                <div className="mx-3 mt-5">
          <span className="py-2 px-3 mx-3 bg-green-500 border-green-500 border-2 text-primary font-bold text-white">
            List Property
          </span>
          <span className="py-2 px-4 mx-3 border-green-500 border-2 text-green-500 bg-transparent font-bold">
            Find Property
          </span>
        </div>
            </motion.div>
            <motion.div
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{delay: 0.3, duration: 0.7,type: 'tween'}}>

            
               
             <img className='' width={450} src={house} alt="home-image" />
            </motion.div>
        </div>
       
    </div>
  )
}

export default Home