import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PageRegistro from "../pages/PageRegistro"
import RotaProtegida from "./RotaProtegida";
import PageLogin from "../pages/PageLogin";
import Grafico from "./Grafico"
import Header from "./Header";

const App = () => {
    return (   
        <BrowserRouter>
            <Routes>
                <Route element={ <Header/> }>
                    <Route path="/dashboard" element={
                        <RotaProtegida>
                            <Dashboard/>
                            <Grafico/>
                        </RotaProtegida>
                    }/>
            
            
                    <Route path="/" element={
                    
                            <PageLogin/>

                    }/>
            
            
                    <Route path="/registro" element={

                            <PageRegistro/>
                        
                    }/>
                </Route>
            </Routes>
            
        </BrowserRouter>
    
    )
}

export default App