import { motion } from "framer-motion";
export const Service = () => {
  return (
    <>
      <section id="service" className="h-screen w-full ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=""
        >
          {/* motion action */}
          {/* <!-- component --> */}
          <div class="ml-10 mt-44 flex flex-col space-y-20 text-base text-gray-600">
            <div class=" flex items-center">
              <div class="w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xl">
                1
              </div>
              <div className="flex items-center space-x-5 ml-2">
                <span class="ml-4 font-medium">Step One</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit ea natus ad, error illum cum earum! Inventore
                </p>
              </div>
            </div>
            <div class="h-1 w-16 text-base text-gray-600 bg-indigo-200"></div>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                2
              </div>
              <div className="flex space-x-5 ml-2">
                <span class="ml-4 font-medium">Step Two</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit ea natus ad, error illum cum earum!
                </p>
              </div>
            </div>

            <div class="h-1 w-16 bg-blue-200 "></div>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-xl">
                3
              </div>
              <div className="flex space-x-5 ml-2">
                <span class="ml-4 font-medium">Step Three!</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit ea natus ad, error illum cum earum!
                </p>
              </div>
            </div>
            {/* container */}
            <div class="flex items-center">
              <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                4
              </div>
              <div className="flex space-x-5 ml-2">
                <span class="ml-4 font-medium">Step four!</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit ea natus ad, error illum cum earum!
                </p>
              </div>
            </div>
            {/* container */}
          </div>
        </motion.div>
      </section>
    </>
  );
};
