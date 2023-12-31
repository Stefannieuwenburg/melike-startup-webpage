import Logo from "../../assets/logos/orglogo.jpg"
import Button from "../../shared/button";
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <>
      <section
        id="Home"
        className="text-gray-600 body-font h-screen w-full m-2 md:p-14"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={Logo}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Uw betrouwbare partner in haartransplantatiediensten
            </h1>
            <div className="w-12 h-1 bg-[#e0a96d] rounded mt-2 mb-2"></div>
            <p className="mb-8 leading-relaxed">
              Onze team staat voor volledige begeleiding en advies voor haar
              transplantatie in İstanbul. Inclusief in de prijs u ontvangt drie
              overnachtingen in een hotel en privétransfer van en naar het
              vliegveld. ISO Gecertificeerd met gebruik van de Nieuwste
              methodieken.
            </p>
            <div className="flex justify-center">
              <Link
                className="m-3 text-[#e0a96d] inline-flex items-center cursor-pointer"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
              >
                <Button text="Plan een gratis advies gesprek" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
