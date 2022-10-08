import React, { Component } from 'react';
//imrc cc sfc
class Person extends Component {
    // state = {  } 
  
    constructor(name){
        super();
        this.name = name;
    }
    walk(){
        console.log(this.name + " walks.")
    }
/*     render() { 
        return ();
    } */
}
 
export default Person;