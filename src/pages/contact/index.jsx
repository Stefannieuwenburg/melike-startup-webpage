import { motion } from "framer-motion";
import WhatsAppLogo from "../../assets/logos/whatsapplogo.png";
import EmailLogo from '../../assets/logos/emaillogo.png'
export const Contact = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        id="contact"
        className="container"
      >
        <section class="bg-white">
          <div class="flex flex-col m-4 bg-white">
            <div>
              <div class=" flex flex-col items-center gap-4 ">
                <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div class="flex flex-col items-center gap-2 p-10 bg-white shadow-main">
                    <span>
                      <img
                        src={EmailLogo}
                        alt="Email"
                        className="w-full h-14 rounded-md object-cover m-2"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-black">Email</p>
                    <p class="text-base leading-7 text-black">
                      Contact ons per mail
                    </p>
                    <a
                      class="text-lg font-bold text-black"
                      href="mailto: hello@loopple.com"
                    >
                      hello@melike.com
                    </a>
                  </div>
                  <div class="flex flex-col items-center gap-2 p-10 bg-white shadow-main">
                    <a
                      aria-label="Chat on WhatsApp"
                      href="https://wa.me/1XXXXXXXXXX"
                    >
                      <img
                        className="w-full h-14 rounded-md object-cover m-2 "
                        alt="Chat on WhatsApp"
                        src={WhatsAppLogo}
                      />
                      {/* Je eigen link maken
                      Gebruik https://wa.me/<number> waarbij <number> een volledig telefoonnummer is in internationale notatie. Gebruik geen nullen, haakjes of streepjes in het telefoonnummer in internationale notatie. */}
                      <a />
                    </a>
                    <p class="text-base leading-7 text-dark-grey-600">
                      Zoek contact via WhatsApp
                    </p>
                    <a
                      class="text-lg font-bold text-gray-800 hover:text-gray-600"
                      href="tel:+516-486-5135"
                    >
                      +xxxx-xxx-xx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <html></html>
      </motion.div>
    </>
  );
};
