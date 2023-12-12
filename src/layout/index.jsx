import {NavBar} from "../componenten/navbar/index";
import Footer from "../componenten/footer/index";

const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <div>{children}</div>
        <Footer />
    </>
  );
};
export default Layout;
