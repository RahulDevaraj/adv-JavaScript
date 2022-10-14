import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class Score extends Component {
    state = { 
        count: this.props.init
     } 
     handleIncrement(){
        this.setState({count: this.state.count+1})
     }
     handleDecrement(){
        this.setState({count: this.state.count-1})

    }
    render() {

        const element=
        <div>
            <span style={{fontSize:'30px' ,color:'red'}}>{this.showScore()} &nbsp;</span>
            
            <button className='btn btn-primary' 
            onClick={()=>{this.handleIncrement()}}>Increment</button>
            <button className='btn btn-danger' onClick={()=>this.handleDecrement()}>Decrement</button>
            <img src={require('../images/Penguins.jpg')} height='200px' alt="Image"></img>
        </div>; 
        return (element);
    }
    showScore(){
        let count = this.state.count;
        return (count===0)?"CAn't be  0":count;
    }
}
 
export default Score;