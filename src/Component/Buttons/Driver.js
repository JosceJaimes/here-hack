import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';


class ButtonDriver extends Component{
    constructor(){
        super();
    }
    clickeable=()=>{
        console.log('holo');
        
    }
    render(){
        return(
            <FontAwesome
            onClick={this.clickeable}
            className='fa-car'
            name='fa-car'
            size='3x'
            />
        )
    }
}
 
export default ButtonDriver;