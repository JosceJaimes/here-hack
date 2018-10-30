import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';

class ButtonCalendary extends Component{
    constructor(){
        super();
    }
    calendar=()=>{
        console.log('point');
        
    }
    render(){
        return(
                <FontAwesome
                onClick={this.calendar}
                className='calendar'
                  name='calendar'
                  size='3x'
                />
        )
    }
}
 
export default ButtonCalendary;