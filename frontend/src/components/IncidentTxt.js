import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../img/logo.svg'
import{ FiArrowLeft } from 'react-icons/fi'

export default function IncidentTxt() {
  return (
    <>
      <div className="new-incident">
          <section>
              <img src={logoImg} alt="Be the hero"/>

              <h1>Cadastrar novo caso</h1>
              <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

              <Link to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar para home
              </Link>
          </section>
      </div>
    </>
  )}