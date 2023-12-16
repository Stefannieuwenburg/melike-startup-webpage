import { Route, Routes } from "react-router-dom";
import { Transplant } from "../src/pages/transplant/index";
import { Loss } from "../src/pages/loss/index";
import { Before } from "../src/pages/before/index";
import { Results } from "../src/pages/results/index";
import { Cost } from "../src/pages/cost/index";
import { Contact }  from "../src/pages/contact/index";
import Layout from "../src/layout/index";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="Hair Loss" element={<Loss />} />
          <Route path="Before & After" element={<Before />} />
          <Route path="Results" element={<Results />} />
          <Route path="Costs" element={<Cost />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Hair Transplant" element={<Transplant />}>
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
        <Loss />
        <Before />
        <Results />
        <Cost />
      </Layout>
    </>
  );
};

export default App;
