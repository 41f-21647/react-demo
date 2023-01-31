import React from 'react';
import './ListeProduit.css';

export default class ListeProduit extends React.Component{
  constructor(){
    super();  // Appel explicite au constructeur de la classe React.Component
  }


  render(){
    return (
      <div className="liste">
        <h1>liste</h1>
      </div>
    );
  }
}


