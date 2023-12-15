import { Route, Routes } from "react-router-dom";
import { Transplant } from "../src/pages/transplant/index";
import { Loss } from "../src/pages/loss/index";
import { Before } from "../src/pages/before/index";
import { Results } from "../src/pages/results/index";
import { Cost } from "../src/pages/cost/index";
import  Contact  from "../src/pages/contact/index";
import Layout from "../src/layout/index";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Layout>
        <Transplant />
        <Loss />
        <Before />
        <Results />
        <Cost />
      </Layout>
    </>
  );
};

export default App;
