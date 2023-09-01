
const Contact = () => {
  return (
    <div>
        <div className='grid grid-cols-1 mt-2 px-4 md:grid-cols-2 lg:grid-cols-2 gap-5 md:px-4 lg:gap-2 mb-8 mx-6 py-6 '>
            <div className="left-loop px-6 py-2">
                {/* Div 1 */}
                <h2 className='text-white text-lg font-bold pt-4 pb-2 font-hanuman'>
                    Stay In The Loop
                </h2>
                <p className='text-white text-md pb-2 font-hanuman'>Subscribe to recieve the latest news and updates about <br /> Urban Homes. We promise not to spam you! </p>
            </div>
            <div className="right-loop flex justify-center items-center pt-4"> 
                {/* Div 2 */}
                <form action="">
          <div className="flex flex-col md:flex-row justify-center mb-2">
            <input
              type="email"
              placeholder="Enter email address"
              name=""
              className=" text-md md:text-md placeholder:text-gray-500 placeholder:italic py-2 px-2 lg:px-6 bg-white rounded md:rounded-tr-none md:rounded-br-none mb-2 md:mb-0 outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              name=""
              className="bg-green-500 rounded md:rounded-tl-none md:rounded-bl-none text-md md:text-md py-1 px-2 md:px-8 lg:py-2 lg:px-6 cursor-pointer "
            />
          </div>
          
        </form>
            </div>
        </div>
    </div>
  )
}

export default Contact