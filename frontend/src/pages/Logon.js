import React from 'react'
import LogForm from '../components/LogForm';
import heroesImg from '../img/heroes.png'


export default function Logon() {
  return (
      <div className="logon-container">
          <LogForm/>
          <img src={heroesImg} alt="heroes"></img>
      </div>
  )}