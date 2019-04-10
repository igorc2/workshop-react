import React, { Component } from 'react';

class welcome extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                testes
                <h1>{this.props.person.name}</h1>
                <h1>{this.props.person.age}</h1>
                <button onClick={this.props.mostraTexto()}>Clique</button>
            </React.Fragment>
        );
    }
}

export default welcome;