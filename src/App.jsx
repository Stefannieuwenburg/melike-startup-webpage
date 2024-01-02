
import { NavMenu } from "../src/componenten/navbar/index";
import { Home } from "./pages/home/index";
import { Waarom } from "./pages/waarom/index";
import { Transplantatie } from "./pages/transplantatie/index";
import { Methodes } from "./pages/methodes/index";
import { Step } from "./pages/stap/index";
import { Contact } from "./pages/contact/index";
import { Footer } from "./componenten/footer/index";

const App = () => {
  return (
    <>
      <NavMenu />
      <Home />
      <Waarom />
      <Step />
      <Transplantatie />
      <Methodes />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
