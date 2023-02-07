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
      <header className="App-header">
        <nav>
            <div className="top-nav">
              <div className="barre">
                <a className="logo" href="/">
                  B<span>iero</span>
                </a>
                <span className="flex-spacer"></span>
                <p className="menu-mobile"></p>
              </div>
              <span className="flex-spacer"></span>
              <ul>
                <li>
                  <a href="/produit">Les produits</a>
                </li>
                          </ul>
                          <section>
                            <button onClick={this.props.seConnecter}>{btnConnecter}</button>
                          </section>
            </div>
          </nav>
        </header>
    );
  }
}


