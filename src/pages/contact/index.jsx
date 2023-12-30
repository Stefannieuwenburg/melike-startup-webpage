
import { ImWhatsapp } from "react-icons/im";
import { FaStethoscope } from "react-icons/fa6";
import { IoIosAirplane } from "react-icons/io";
import { CgMail } from "react-icons/cg";
export const Contact = () => {
  return (
    <>
      <section id="Contact" className="py-20">
        <div className="container mx-auto md:px-6">
          <div className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
                <h2 className="mb-6 text-2xl font-bold">
                  Waarom Go4<span className="text-[#d8aa46]">Hair</span>
                </h2>

                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                  Met Go4Hair ervaar je de beste haar transplantatie <br />
                  met controle en goede na zorg 
                </p>
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
                          Whatsapp contact voor het maken van een afspraak of vragen over
                          de behandeling
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                    <div className="flex">
                      <div className="shrink-0">
                        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <IoIosAirplane size={35} style={{ color: "blue" }} />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-3 font-bold text-lg">
                          Snellen aanvraag
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                          wij kunnen op zeer korte tijd een behandeling aanvragen
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                    <div className="flex">
                      <div className="shrink-0">
                        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <FaStethoscope size={35} style={{ color: "Black" }} />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-3 font-bold text-lg">Goede service</p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                          wij leveren een goede service en na zorg
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
