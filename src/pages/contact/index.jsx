//import Button from "../../shared/button";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { CgMail } from "react-icons/cg";
export const Contact = () => {
  return (
    <>
      <section id="Contact" className="py-20 text-center items-center">
        <p className="text-2xl text-white m-4 bg-[#9b7d3e] rounded-xl ">
          Contact
        </p>
        <h2 className="mb-6 text-2xl font-bold mx-14  ">
          Go4<span className="text-[#d8aa46]">Hair</span>
        </h2>
        <div className="container mx-auto md:px-6">
          <div className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto:mb-0 lg:w-4/12">
                {/* form */}
                {/* <section class="container text-gray-600 body-font relative border-2 rounded-xl items-center justify-center w-full shrink-0 grow-0 basis-auto">
                  <div class=" px-5 py-24 mx-auto">
                    <p className="mb-8 text-gray-600 font-bold text-xl">
                      Contact bericht
                    </p>
                    <div class="lg:w-1/2 md:w-1/2 mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class="p-2 w-1/2">
                          <div class="relative">
                            <label
                              for="name"
                              class="leading-7 text-sm text-gray-600"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-focus-[#d8aa46]:bg-white focus:ring-2 focus:ring-[#d8aa46] text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div class="p-2 w-1/2">
                          <div class="relative">
                            <label
                              for="email"
                              class="leading-7 text-sm text-gray-600"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#d8aa46] focus:bg-white focus:ring-2 focus:ring-[#d8aa46] text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div class="p-2 w-full">
                          <div class="relative">
                            <label
                              for="message"
                              class="leading-7 text-sm text-gray-600"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#d8aa46] focus:bg-white focus:ring-2 focus:ring-[#d8aa46] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                        <div class="p-2 w-full">
                          <Button text="send" />
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
                      </div>
                    </div>
                  </div>
                </section> */}
                {/* form */}
              </div>
              <div className="items-center justify-center w-full shrink-0 grow-0 basis-auto">
                <div className="mt-12">
                  <div className="p-4 inline-block rounded-md bg-primary-100 text-primary">
                    <a href="mailto:Go4hairclinic@gmail.com?body= Beste go4hair">
                      <CgMail
                        className="hover:cursor-pointer"
                        size={35}
                        style={{ color: "Red" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="">
                  <p className="mb-3 font-bold text-lg">Email Contact</p>
                  <p className="m-2 text-neutral-500 dark:text-neutral-300"></p>
                </div>
                <div>
                  <div className="mt-8 inline-block rounded-md bg-primary-100 text-primary">
                    <a
                      target="_blank"
                      aria-label="Chat on WhatsApp"
                      href="https://wa.me/+31630360329"
                    >
                      <ImWhatsapp
                        className="hover:cursor-pointer"
                        size={35}
                        style={{ color: "Green" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-3 font-bold text-lg">WhatsApp Contact</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Tel: +31630360329
                  </p>
                </div>
                <div>
                  <div className="mt-8 inline-block rounded-md bg-primary-100 text-primary">
                    <a
                      target="_blank"
                      aria-label="Instagram"
                      href="https://www.instagram.com/go4hair_clinic/"
                    >
                      <BsInstagram
                        className="hover:cursor-pointer"
                        size={35}
                        style={{ color: "purple" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-3 font-bold text-lg">Instagram Contact</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    @go4hair_clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
