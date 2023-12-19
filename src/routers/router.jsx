import { Route, Routes } from "react-router-dom";
import { Afspraak } from "./pages/afspraak/index";


export const Router = () => { 
    return (
    <>
           <Routes> 
        <Route path="Transplantatie" element={<Transplantatie />} />
        <Route path="Methodes" element={<Methodes />} />
        <Route path="Service" element={<Service />} />
        <Route path="Afspraak" element={<Afspraak />} />
        <Route path="Contact" element={<Contact />} /> 
        <Route path="Transplantatie" element={<Transplantatie />}> 
         <Route path="Afspraak" element={<Afspraak />} />
            <Route path="Contact" element={<Contact />} /> 
         </Route> 
       </Routes> 
    
    </>
    );
}