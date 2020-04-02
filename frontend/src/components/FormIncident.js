import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";
export default function FormIncident() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: { Authorization: ongId }
      });

      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
     <form className="cadastro" onSubmit={handleNewIncident}>
      <input 
         placeholder="Titulo do caso"
         value={title}
         onChange={e => setTitle(e.target.value)}
      />
      <textarea 
         placeholder="Descrição"
         value={description}
         onChange={e => setDescription(e.target.value)}
      />
      <input 
         placeholder="valor"
         value={value}
         onChange={e => setValue(e.target.value)}
      />  
        <button className="button" type="submit" >Cadastrar</button>
     </form>
  )}