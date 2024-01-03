import { Link } from "react-scroll";
export const Transplantatie = () => {
  return (
    <>
      <section id="Haartransplantatie" className=" text-gray-600 body-font ">
        <div className=" Container items-center px-5 py-24 mx-auto flex flex-col">
          <div className="flex flex-col ">
            <div className=" text-center ">
              <div className="flex flex-col items-center text-center justify-center">
                <p className="text-2xl text-white m-4 bg-[#9b7d3e] w-full rounded-xl ">
                  Haartransplantatie
                </p>
                <h2 className="mb-6 text-2xl font-bold">
                  Go4<span className="text-[#d8aa46]">Hair</span>
                </h2>
                <div className="w-12 h-1 bg-[#e0a96d] rounded mt-2 mb-2"></div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <p className="mb-8 leading-relaxed">
                    Een haartransplantatie is een chirurgische ingreep om haren
                    te verplaatsen. Hierbij worden haarfollikels van het ene
                    deel van het lichaam, meestal de achterkant van het hoofd,
                    geoogst en vervolgens geïmplanteerd op de kale of dunner
                    wordende delen van het hoofd. Als u geïnteresseerd bent in
                    haartransplantatie behandelingen, wacht dan niet langer met
                    het maken van een vrijblijvende afspraak met ons.
                  </p>
                  <Link
                    className="m-3 text-[#e0a96d] inline-flex items-center cursor-pointer"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                  >
                    plan een gratis adviesgesprek
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
