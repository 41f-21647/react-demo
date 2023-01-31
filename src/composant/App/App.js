import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();  // Appel explicite au constructeur de la classe React.Component
    this.message = "Ceci est un message";
  }

  salutation(){
    this.message = "allo le monde";
    return "Salut toi";
  }

  render(){
    let toto = "Allo Toto";
    let unParagraphe = <p>Allo</p>;
    return (
      <div className="App toto">
        <Entete />
        <ListeProduit />
        {/*<h1>{toto}</h1>
        {unParagraphe}
        {this.message}
        {this.salutation()}
    {this.message}*/}
      </div>
    );
  }
}


