import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class ButtonNotifications extends Component{
    constructor(){
        super();

    }

    notific=()=>{
        console.log('pues no');
        
    }
    render(){
        return( 
            <FontAwesome
            onClick={this.notific}
            className='bell'
            name='bell'
            size='3x'
            />
        )

    }
}
export default ButtonNotifications;



/* <div className="container-Notifications">
    <div className="row">
        <div className='col-lg-12'>
        
        </div>  
    </div>
</div> */




{/* <div className="container">
<div className="row">
    <div className="col-xs-12 col-md-6">
        <FontAwesome
        className='bell'
        name='bell'
        size='2x'
        spin
        />
    </div>
</div>
</div> */}