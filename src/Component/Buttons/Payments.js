import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class ButtonPayments extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <FontAwesome
            className='usd'
              name='usd'
              size='3x'
            />    
        )
    }
}

export default ButtonPayments;