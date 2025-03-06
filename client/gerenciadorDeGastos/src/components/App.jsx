import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PageRegistro from "../pages/PageRegistro"
import RotaProtegida from "./RotaProtegida";
import PageLogin from "../pages/PageLogin";

const App = () => {
    return (   
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={
                    <RotaProtegida>
                        <Dashboard/>
                    </RotaProtegida>
                }/>
           
         
                <Route path="/" element={
                   
                        <PageLogin/>

                }/>
           
           
                <Route path="/registro" element={

                        <PageRegistro/>
                    
                }/>
            </Routes>
            
        </BrowserRouter>
    
    )
}

export default App