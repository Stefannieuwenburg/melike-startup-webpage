import { Link } from "react-scroll";

export const Transplant = () => {
  return (
    <>
      <section id="Hair Transplant" className="h-screen w-full">
        <div className=" text-center text-3xl ">transplant page</div>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-green-600 m-4 p-3 text-gray-800 font-bold font-sans cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300"
        >
          contact
        </Link>
      </section>
    </>
  );
};
