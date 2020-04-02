import React from 'react'
import LogForm from '../components/LogForm';
import heroesImg from '../img/heroes.png'


export default function Logon() {
  return (
      <div className="logon-container">
          <LogForm/>
          <img className="heroesImg" src={heroesImg} alt="heroes"></img>
      </div>
  )}