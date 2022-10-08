import React, { Component } from 'react';
import Person from './person'
export class Student extends Person {
    /* state = {  } 
    render() { 
        return ();
    } */
    constructor(name , course){
        super(name);
        this.course = course;
    }
    print(){
        console.log(`${this.name} is enrolled in ${this.course}`)
    }
}
export const print = (message)=> log(message, new Date());
export const log = (message, date)=> `${message} Date: ${date}`;

export class Expedition{
    constructor(destination,length,gear){
        this.destination = destination;
        this.length = length;
        this.gear = gear;
    }
    print(){
        console.log(`${this.destination} will take ${this.length} days and needs ${this.gear}`)
    }
}




// export default Student;