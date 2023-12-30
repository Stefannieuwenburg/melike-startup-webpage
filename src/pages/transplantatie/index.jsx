
import logo from "../../assets/logos/round.png"
//import hair from "../../assets/images/hair.jpg"
export const Transplantatie = () => {
  return (
    <>
      <section
        id="Haartransplantatie"
        className=" text-gray-600 body-font md:py-36"
      >
        <div className=" Container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-fill object-center h-full w-max rounded-lg"
                src={hair}
                // src="https://dummyimage.com/1200x500"
              /> 
            </div> */}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={logo} alt="content" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Go4Hair
                  </h2>
                  <div className="w-12 h-1 bg-[#e0a96d] rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Een haartransplantatie is een chirurgische ingreep om haren
                    te verplaatsen. Hierbij worden haarfollikels van het ene
                    deel van het lichaam, meestal de achterkant van het hoofd,
                    geoogst en vervolgens geïmplanteerd op de kale of dunner
                    wordende delen van het hoofd. Als u geïnteresseerd bent in
                    haartransplantatie behandelingen, wacht dan niet langer met
                    het maken van een vrijblijvende afspraak met ons.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  De toepassingen zijn vooral voor hoofdhaar, baardhaar en
                  wenkbrauwen. Dit is een oplossing voor haarverlies bij de
                  aandoening Alopecia androgenetica maar niet geschikt voor alle
                  soorten haarverlies van bijvoorbeeld de gevolgen van een
                  chemotherapie. Een haartransplantatie operatie wordt vaak
                  verricht onder lokale verdoving. Haartransplantatie is een
                  alom bekend middel om haaruitval of kaalheid te behandelen.
                  Haartransplantatie behandelingen worden vaak toegepast bij dun
                  haar, inhammen en het opvullen van kale plekken. Onze ervaren
                  deskundigen voert deze behandelingen met precisie en
                  zorgvuldigheid uit. 
                </p>
                <a className="text-[#e0a96d] inline-flex items-center ">
                  plan een adviesgesprek
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
