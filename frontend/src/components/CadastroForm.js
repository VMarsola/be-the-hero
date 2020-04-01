import React , {useState} from 'react'
import api from '../services/api'
import { useHistory  } from 'react-router-dom'


export default function CadastroForm() {

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [whatsapp, setWhatsapp] = useState('')
      const [city, setCity] = useState('')
      const [uf, setUf] = useState('')

//redireciona o usuario apos uma ação
const history = useHistory()

   async function handleRegister(e) {
      //previne o formulario de recarregar
      e.preventDefault()

      const data = {
         name,
         email,
         whatsapp,
         city,
         uf,
      }

     try {
      const response = await api.post('ongs', data)
      alert(`Seu ID: ${response.data.id}`)
        //se logado com sucesso joga o usuario pra pagina inicial
        history.push('/')
     } catch(err){
        alert('Erro no cadastro, tente novamente.')
     }
   }
 
  return (
     <form onSubmit={handleRegister} className="cadastro">
      <input
         placeholder="Nome da ONG"
         value={name}
         onChange={e => setName(e.target.value)}
       />
      <input 
         type="email"
         placeholder="E-mail"
         value={email}
         onChange={e => setEmail(e.target.value)} 
       />
      <input 
         placeholder="Whatsapp"
         value={whatsapp}
         onChange={e => setWhatsapp(e.target.value)} 

      />
      
        <div className="input-group">
            <input 
               placeholder="Cidade"
               value={city}
               onChange={e => setCity(e.target.value)} 
               />
            <input
                placeholder="UF" 
                style={{width: 80}}
                value={uf}
                onChange={e => setUf(e.target.value)} 
                />
        </div>

        <button 
            className="button"
            type="submit"
            // 'onClick={register}'
            >Cadastrar
        </button>
     </form>
  )}