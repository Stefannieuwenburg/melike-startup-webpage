import { motion} from "framer-motion";
import { Link, Outlet } from "react-router-dom";

export const Transplant = () => {
  return (
    <>
      <section id="Hair Transplant" className="  h-screen w-full bg-[#fffefd]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" text-center text-3xl "
        >
          <p>Hair Transplant</p>
          <br />
          <Link
            to="Contact"
            className="bg-green-600 m-8 p-2 rounded-2xl text-gray-800 font-bold font-sans cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            contact
          </Link>
        </motion.div>

        <Outlet />
      </section>
    </>
  );
};
