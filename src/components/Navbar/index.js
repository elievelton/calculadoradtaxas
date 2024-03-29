import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaOutdent,FaSignOutAlt} from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import { NavLink } from "react-router-dom";
import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'
import styles from './Navbar.module.css'
// import style2 from '../Header/Header.module.css'


function Navbar() {
    const [resp,setResp] = React.useState(false)
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle(styles['responsive_nav']);
    }

    function handleResize(params) {
        const width = window.innerWidth
        if (width <= 1024){
            setResp(true)
        }else{
            setResp(false)
        }
    }

    React.useEffect(() => {
        handleResize()
    },[])
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[])
    

    const {user} = useAuthValue();  
    const {logout} = useAuthentication();
    // console.log(resp)
    return(
        
        <>
            <nav  ref= {navRef} className={styles.nav}>
                <NavLink to="/"><FaHome size="1.8rem"/><span>Home</span></NavLink>
                <NavLink to="/sobre"><FaOutdent/><span>Sobre</span></NavLink>
                <NavLink to="/contato"><FaEnvelope/><span>Contato</span></NavLink>                
                <NavLink to="/ofertas"><FaFire className={styles.fire}/><span>Ofertas</span></NavLink>
                {!user&& resp &&(
                    <NavLink to="/login"><FaUserCircle/><span>Login/Cadastro</span></NavLink>
                )}
                {user&& resp &&(
                    <NavLink to="/paineldecontrole"><FaSignOutAlt/>DashboardUser</NavLink>
                )}

                {user&& resp &&(
                    
                        <button onClick={logout} className={styles.sair}>
                            Sair
                        </button>
                    
                )}
                
                <button  className={`${styles['nav-btn']} ${styles['nav-close-btn']}`} onClick={showNavbar}>
                    <FaTimes size="1.8rem"/>
                </button>
                
            </nav>
            {!user&& !resp &&(
                    <NavLink to="/login"><FaUserCircle/><span>Login/Cadastro</span></NavLink>
            )}
            {user&& !resp &&(
                <a href="/paineldecontrole"><FaSignOutAlt/>Dashboard</a>
            )}

            {user&& !resp &&(
                
                    <button onClick={logout} className={styles.sair}>
                        Sair
                    </button>
                
            )}
            <button className={styles['nav-btn']} onClick={showNavbar}>
                <FaBars size="1.8rem"/>
            </button>
        </>
        
    );
}
export default Navbar;