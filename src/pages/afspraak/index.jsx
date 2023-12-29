import { motion } from "framer-motion";
export const Afspraak = () => {
  return (
    <>
      <section id="Afspraak maken" className=" h-screen w-full bg-[#fffefd]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=""
        >
          {/* motion action */}
          <section class="text-gray-600 body-font relative">
            <div class="absolute inset-0 bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.6656566141!2d4.821560499526383!3d52.3547418439799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1703883581186!5m2!1sen!2snl"
                width="100%"
                height="650"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="map"
              ></iframe>
            </div>
            <div class=" px-5 py-24 mx-auto flex">
              <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 class="text-gray-900 text-2xl mb-1 font-medium title-font text-center">
                  Go4<span className="text-[#d8aa46]">Hair</span>
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600 text-center">
                  maak een afspraak of neem contact met ons op
                </p>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button class="text-white bg-[#d8aa46] border-0 py-2 px-6 focus:outline-none hover:bg-[#c2a360] rounded text-lg">
                  verstuur
                </button>
              </div>
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
};
