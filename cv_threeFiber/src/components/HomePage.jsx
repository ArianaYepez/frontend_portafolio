import  { About, Contact, Feedbacks, Navbar, Tech, Works } from "../components";
import {Scroll} from "../components";

export const HomePage = () => {
 
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        
        <Navbar/>
        
      </div>
      {/*
      <div className="bg-terciary">
      <div className="">
      
      </div>
  */}
      <About/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
      <Contact/>
      </div>
      </div>
    //</div>
  )
}



