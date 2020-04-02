import React from 'react'
import logoImg from '../img/logo.svg'
import { Link } from "react-router-dom";
import{ FiPower } from 'react-icons/fi'
import { useHistory } from "react-router-dom";



export default function HeaderOng() {

    const ongName = localStorage.getItem('ongName')
    
    const history = useHistory();


    function handleLogout() {
        localStorage.clear();
        history.push("/");
      }


    return(
        <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Bem vinda, {ongName}</span>
        <div className="row-mobile">
            <Link className="button" to="/newIncident">Cadastrar novos casos</Link>
            <button type="button"  onClick={handleLogout}>
                <FiPower size={18} color="#A8A8B3"/>
            </button>
        </div>
    </header>
    )
}