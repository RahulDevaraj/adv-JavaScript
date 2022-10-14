import React, { Component } from 'react';
class Greeting extends Component {
    state = { 
        name: this.props.name,
        age: this.props.age
     } 

    render() { 
        return (<h1>Hello {this.state.name} 
        and his age is {this.state.age+1}</h1>);
    }
}
 
export default Greeting;