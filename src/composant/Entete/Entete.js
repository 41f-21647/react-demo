import React from 'react';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    //this.state = {estConnecte : false}
    //this.connection = this.connection.bind(this)
  }

 /* connection() {
    this.setState({
      estConnecte : !this.state.estConnecte
    });
  }*/

  render(){
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter": "Se connecter")
    return (
      <header className="entete">
        <h1>Biero!</h1>
        <button onClick={this.props.seConnecter}>{btnConnecter}</button>
        <nav>
          <ul>
            <li>Nav 1</li>
            <li>Nav 2</li>
            <li>Nav 3</li>
          </ul>
        </nav>
      </header>
    );
  }
}


