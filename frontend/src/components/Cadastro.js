import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../img/logo.svg'
import{ FiArrowLeft } from 'react-icons/fi'
import CadastroForm from './CadastroForm'

export default function CadastroTxt() {
  return (
    <>
     <div className="content">
         <section>
             <img src={logoImg} alt="Be the hero"/>

             <h1>Cadastro</h1>
             <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG</p>

             <Link to="/">
                <FiArrowLeft size={16} color="#E02041"/>
                Não tenho cadastro
             </Link>
         </section>

         <CadastroForm/>
     </div>
    </>
  )}