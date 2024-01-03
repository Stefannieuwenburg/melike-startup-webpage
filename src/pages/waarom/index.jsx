import image1 from "../../assets/images/wimage1.jpg";
import image2 from "../../assets/images/wimage2.jpg";
import image3 from "../../assets/images/wimage3.jpg";


export const Waarom = () => {
  return (
    <>
      <section
        id="Waarom"
        className="flex items-center text-center justify-center py-2"
      >
        <div className="container mx-auto p-4">
          <h2 className="mb-6 text-2xl font-bold ">
            <p className="text-2xl  text-white m-2 bg-[#9b7d3e] w-full rounded-xl ">
              Waarom
            </p>
            Go4<span className="text-[#d8aa46]">Hair</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            <div className="bg-white rounded-lg border p-4">
              <img
                src={image1}
                alt="Placeholder Image"
                className="rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <p className="text-gray-700 text-base">
                  Medisch team in İstanbul met meer dan 9 jaar ervaring met haar
                  transplantatie
                </p>
                <a className="m-3 text-[#e0a96d] inline-flex items-center cursor-pointer">
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
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src={image2}
                alt="Placeholder Image"
                className=" rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <p className="text-gray-700 text-base font-normal">
                  De eerst consultatie is gratis mogelijk online of op een
                  locatie naar uw keuze
                </p>
                <a className="m-3 text-[#e0a96d] inline-flex items-center cursor-pointer">
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
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src={image3}
                alt="Placeholder Image"
                className=" rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <p className="text-gray-700 text-base">
                  Inclusief in de prijs u ontvangt drie overnachtingen in een
                  hotel en privétransfer van en naar het vliegveld
                </p>
                <a className="m-3 text-[#e0a96d] inline-flex items-center cursor-pointer ">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
