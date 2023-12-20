
import { NavMenu } from "../src/componenten/navbar/index";
import { Transplantatie } from "./pages/transplantatie/index";
import { Methodes } from "./pages/methodes/index";
import { Step} from "./pages/step/index";
import { Afspraak } from "./pages/afspraak/index";
import { Contact } from "./pages/contact/index";
import { Footer } from "./componenten/footer/index";

const App = () => {
  return (
    <>
      <NavMenu />
      <Transplantatie />
      <Methodes />
      <Step />
      <Contact />
      <Afspraak />
      <Footer />
    </>
  );
};

export default App;
