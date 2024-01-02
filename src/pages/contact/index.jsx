
import { ImWhatsapp } from "react-icons/im";
import { CgMail } from "react-icons/cg";
export const Contact = () => {
  return (
    <>
      <section id="Contact" className="py-20">
        <div className="container mx-auto md:px-6">
          <div className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto:mb-0 lg:w-4/12">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <div className="w-12 h-1 bg-[#e0a96d] rounded ml-4 mt-2 mb-2"></div>
                <a className="p-10 flex items-center cursor-pointer text-gray-700 text-xl">
                  Waarom Go4Hair 
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                    <div className="flex">
                      <div className="shrink-0">
                        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <CgMail
                            className="hover:cursor-pointer"
                            size={35}
                            style={{ color: "Red" }}
                          />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-3 font-bold text-lg">Email Contact</p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                          Email contact voor het maken van een afspraak of
                          vragen over de behandeling
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                    <div className="flex">
                      <div className="shrink-0">
                        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <ImWhatsapp
                            className="hover:cursor-pointer"
                            size={35}
                            style={{ color: "Green" }}
                          />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-3 font-bold text-lg">
                          whatsapp Contact
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                          Whatsapp contact voor het maken van een afspraak of
                          vragen over de behandeling
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
