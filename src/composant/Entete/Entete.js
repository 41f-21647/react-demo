import React from 'react';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(){
    super();  // Appel explicite au constructeur de la classe React.Component
 }
  render(){
    return (
      <div className="entete">
        <p>Entete</p>
      </div>
    );
  }
}


