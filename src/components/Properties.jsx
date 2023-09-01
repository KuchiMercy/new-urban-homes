import { motion } from "framer-motion";
import estonia from "../assets/estonia.jpeg";
import vietnam from "../assets/vietnam.jpeg";
import carlifornia from "../assets/carlifornia.jpeg";
import estonia2 from "../assets/estonia2.jpeg";
import vietnam2 from "../assets/vietnam2.jpeg";
import carlifornia2 from "../assets/carlifornia2.jpeg";
const Properties = () => {
  return (
    <div>
      <div className="text-gray-600 text-center text-xl font-bold pb-2 mb-4 pt-6">
        <h1>Featured Properties</h1>
      </div>

      <div className="text-gray-600 text-center text-sm font-bold p-3 my-6">
        <span className="p-2 shadow-xl border-b-2 border-green-500">Buy</span>
        <span className="p-2 shadow-xl border-b-2 border-green-500">Rent</span>
      </div>
      {/* Card 1 */}
      <div className="mt-8 items-center px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 lg:gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={estonia} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              Cottage Island, <span className="font-bold ">Estonia</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">5% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">3 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              2 Bathrooms
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={vietnam} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              The Anam Resort, <span className="font-bold ">Vietnam</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">20% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">6 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              3 Bathrooms
            </span>
          </div>
        </motion.div>

        {/* Card 3 */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={carlifornia} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              Hotel Carlifornia,{" "}
              <span className="font-bold ">United States</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">3% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">2 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              1 Bathrooms
            </span>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={vietnam2} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              Anam Resort, <span className="font-bold ">Vietnam</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">8% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">4 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              3 Bathrooms
            </span>
          </div>
        </motion.div>

        {/* Card 5 */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={carlifornia2} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              Hotel Carlifornia,{" "}
              <span className="font-bold ">United States</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">10% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">2 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              5 Bathrooms
            </span>
          </div>
        </motion.div>

        {/* Card 6 */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="card hover:shadow-xl"
        >
          <div className="mx-4 my-4">
            <img src={estonia2} className="w-full h-32 object-center" />
          </div>
          <div className="mx-6 flex justify-between">
            <span className="text-sm text-gray-600 font-hanuman">
              Cottage Island, <span className="font-bold ">Estonia</span>
            </span>
            <span className="text-sm text-gray-600 font-hanuman">17% Off</span>
          </div>

          <div className="mx-6 flex my-2 justify-between">
            <span className="text-sm text-gray-500 font-hanuman">2 Rooms</span>
            <span className="text-sm text-gray-500 font-hanuman">
              2 Bathrooms
            </span>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center py-4 my-2">
        <button className="bg-green-500 font-bold py-2 px-3 rounded text-white ">
          View Properties
        </button>
      </div>
    </div>
  );
};

export default Properties;
