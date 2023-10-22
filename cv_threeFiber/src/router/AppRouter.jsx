import { Routes, Route } from "react-router-dom";
import { NavbarLogin } from "../components";
import { LoginPage, DashboardPage } from "../components";
import  { About, Contact, Feedbacks, 
 Navbar, Tech, Works } from "../components";
import {HomePage} from "../components/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { Scroll } from "../components";
//import { error404Page } from "../components";


export const AppRouter = () => {
    return ( 
 
    <Routes>
      <Route path="/" element={<NavbarLogin/>}/>
          <Route index element={<Scroll/>} />
            
            <Route path="/home" element={<HomePage/>} />
            <Route path="/loginPage" element={<LoginPage/>} />
            <Route path="/dashboardPage" element={<PrivateRoute> <DashboardPage /> </PrivateRoute> } />
            <Route path="/about" element={<About/>} />
            <Route path="/tech" element={<Tech/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/feedbacks" element={<Feedbacks/>} />
            <Route path="/contact" element={<Contact/>} />
          
                      
    </Routes>
    
    );
}  
