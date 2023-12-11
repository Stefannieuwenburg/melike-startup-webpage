import Nav from "../componenten/nav/index";
import Footer from "../componenten/footer/index";

const Layout = ({ children }) => {
  return (
    <>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
};
export default Layout;
