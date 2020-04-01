import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import logo from '../img/logo.svg'
import{ FiLogIn } from 'react-icons/fi'
import api from '../services/api'


export default function LogForm() {
  const [id, setId] = useState('')
  const history = useHistory()
  async function handleLogin(e){
    e.preventDefault()

    try{
      const response = await api.post('sessions', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile')
    }catch (err){
      alert('Falha no login, tente novamente.')
    }
  }
  return (
         <>
          <section className="form">
            <img src={logo} alt="Be The Hero"/>
            <form action="">
                <h1 className="texto">Faça seu logon</h1>
                <input
                  placeholder="Sua ID"
                  value={id}
                  onChange={e => setId(e.target.value)}
                ></input>
                <button 
                  className="button"
                  type="submit"
                  onClick={handleLogin}
                  >
                  Entrar
                </button>
                <Link 
                to="/register"
                >
                    <FiLogIn size="16" color="#E02041"/>
                    <p className="sub-texto">Não tenho cadastro</p>
                </Link>
            </form>
          </section>
         </>
  )}