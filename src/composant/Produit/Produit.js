import React from 'react';
import './Produit.css';

export default class Produit extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <article className="produit">
                <p>Nom : {this.props.nom}</p>
                <p>Nom : {this.props.biere.nom}</p>
                <p>Prix : {this.props.prix}</p>
                <p>Prix : {this.props.biere.prix}</p>
            </article>
        );
    }
}


