import image1 from "../../assets/images/fue/fue.jpg";
import image2 from "../../assets/images/fut/fut.jpg";
import image3 from "../../assets/images/ice fue/ice.jpg";
import image4 from "../../assets/images/saphire fue/saphire.jpg";
import image5 from "../../assets/images/tomuse dhi/tomuse.jpg";
import { Link } from "react-scroll";
export const Methodes = () => {
  return (
    <>
      <section id="Behandelmethodes">
        <p className="text-2xl text-center text-white m-2 bg-[#9b7d3e] rounded-xl ">
          Methodes
        </p>
        <div className="flex items-center justify-center py-2 bg-[#f7f7f7] ">
          <div className="container mx-auto p-4">
            <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
              <div className="bg-white rounded-lg border p-4">
                <img
                  src={image1}
                  alt="Placeholder Image"
                  className=" rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">
                    Follicular Unit Transplantation (FUT)
                  </div>
                  <p className="text-gray-700 text-base">
                    Follicular Unit Transplantation (FUT) is een
                    haartransplantatie methode waarbij een reepje huid van het
                    donorgebied (meestal de achterkant van het hoofd) wordt
                    verwijderd en vervolgens wordt verdeeld in individuele
                    haarfollikels. Deze follikels worden vervolgens
                    geïmplanteerd in de kale of dunner wordende delen van het
                    hoofd. FUT resulteert vaak in een lineair litteken in het
                    donorgebied en een langere herstelperiode dan andere
                    methoden.
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
              <div className="bg-white rounded-lg border p-4">
                <img
                  src={image2}
                  alt="Placeholder Image"
                  className=" rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">
                    Follicular Unit Extraction (FUE)
                  </div>
                  <p className="text-gray-700 text-base">
                    Follicular Unit Extraction (FUE) is een meer geavanceerde
                    haartransplantatie methode waarbij individuele haarfollikels
                    worden geoogst met behulp van een speciaal instrument dat
                    kleine incisies maakt rond de follikels. De follikels worden
                    vervolgens geïmplanteerd in de kale of dunner wordende delen
                    van het hoofd. FUE resulteert meestal in minder littekens en
                    een kortere herstelperiode dan FUT.
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
              <div className="bg-white rounded-lg border p-4">
                <img
                  src={image4}
                  alt="Placeholder Image"
                  className=" rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">Sapphire FUE</div>
                  <p className="text-gray-700 text-base">
                    Sapphire FUE is een nieuwe en geavanceerde FUE-techniek
                    waarbij de incisies worden gemaakt met een speciaal
                    vervaardigde saffierkristallen mesje in plaats van een
                    metalen instrument. Dit resulteert in minder trauma aan de
                    hoofdhuid en minder kans op beschadiging van de follikels.
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
              <div className="bg-white rounded-lg border p-4">
                <img
                  src={image3}
                  alt="Placeholder Image"
                  className=" rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">Ice FUE</div>
                  <p className="text-gray-700 text-base">
                    Ice FUE is een andere variant van FUE, waarbij de hoofdhuid
                    wordt gekoeld met ijs voordat de follikels worden geoogst.
                    Dit vermindert de kans op bloedingen en vermindert het
                    ongemak voor de patiënt tijdens de procedure.
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
              <div className="bg-white rounded-lg border p-4">
                <img
                  src={image5}
                  alt="Placeholder Image"
                  className=" rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">
                    Direct Hair Implantation (DHI)
                  </div>
                  <p className="text-gray-700 text-base">
                    Direct Hair Implantation (DHI) is een haartransplantatie
                    methode die lijkt op FUE, maar met het verschil dat de
                    implantatie direct plaatsvindt, zonder de noodzaak van het
                    maken van incisies. Dit wordt gedaan met behulp van een
                    speciale implanter pen, die de follikels één voor één in de
                    hoofdhuid plaatst. Dit resulteert in minder schade aan de
                    follikels en minder littekens.
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
