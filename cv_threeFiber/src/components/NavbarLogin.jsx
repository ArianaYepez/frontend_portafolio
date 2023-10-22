import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styles } from "../styles";
import { logo} from '../assets'; 
import { useState } from 'react';

export const NavbarLogin = () => {

    const {state} = useLocation();
    const navigate = useNavigate()

    const [setActive] = useState('')
    
    console.log(state);

    const onLogout = () => {
        
        state.logged = false;
        navigate('/home', {replace: true});
    };

    return (
        <>
            <div className={`${styles.paddingX} w-full flex  items-center py-5 fixed top-0 z-20 bg-primary`}>
                <div className="w-full flex justify-between  items-center max-w-7x1 mx-auto">
                    <Link 
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                    }}
                    >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                    <p className="text-white text-[18px] 
                    font-bold cursor-pointer flex">Ariana Yépez &nbsp; <span className="sm:block hidden">| Portafolio</span></p>
                    </Link>    
                </div>
                
                {state?.logged ? (
                        
                    <div className="justify-end">
                        <button  onClick={onLogout}  > Cerrar Sesion</button>
                     </div>
               
           ) : (
            <nav >
                
                <div className="justify-end">
                <Link to='/home' > Regresar </Link>
                </div>
            </nav>
           )}
        </div>
        
        <Outlet />
        </>
    )
};
