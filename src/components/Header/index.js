import Navbar from '../Navbar/index'
import style from './Header.module.css'
import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaOutdent,FaSignOutAlt, FaCalculator} from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import { NavLink } from "react-router-dom";
import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'

function Header() {

  const {user} = useAuthValue();  
  const {logout} = useAuthentication();
    return(
      <header className={style.header}>
        <a className={style.logo} href="/">
          <FaCalculator/>
          <h3>Calc<span>T</span></h3>
        </a>
        <Navbar/>
        {/* {!user&&(
            <NavLink to="/login"activeClassName="active" className={style.item}><FaUserCircle/>Login/Cadastro</NavLink>
        )}
        {user&&(
            <NavLink to="/paineldecontrole"activeClassName="active"><FaSignOutAlt/>DashboardUser</NavLink>
        )}

        {user&&(
            
          <button onClick={logout} className="sair">
              Sair
          </button>
            
        )} */}
      </header>

    );
}
export default Header;