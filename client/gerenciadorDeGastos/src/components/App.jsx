import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PageRegistro from "../pages/PageRegistro"
import RotaProtegida from "./RotaProtegida";
import PageLogin from "../pages/PageLogin";
import Header from "./Header";
import HeaderDashboard from "./HeaderDashboard";
import HeaderRegister from "./HeaderRegister";

const App = () => {
    return (   
        <BrowserRouter>
            <Routes>
                <Route element={<HeaderDashboard/>}>
                    <Route path="/dashboard" element={
                        <RotaProtegida>
                            <Dashboard/>
                        </RotaProtegida>
                    }/>
                </Route>
                <Route element={ <Header/> }>
                    
            
            
                    <Route path="/" element={
                    
                            <PageLogin/>

                    }/>
                </Route>
                
                <Route element={<HeaderRegister/>}>
                    <Route path="/registro" element={

                            <PageRegistro/>
                        
                    }/>
                </Route>
                
            </Routes>
            
        </BrowserRouter>
    
    )
}

export default App