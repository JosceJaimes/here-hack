import React, {Component} from 'react';
import Notifications from './Buttons/Notifications';
import Calendary from  './Buttons/Calendary';
import Payments from './Buttons/Payments';
import Driver from './Buttons/Driver';
import photo from './Assets/mapa.jpg';
import './ViewFather.css'
import Alerts from './Viewsfather/Notifications'


class ViewPhater extends Component{
    constructor(){
        super();
    }
    cancel=()=>{
        console.log('adios');    
    }
    render(){
        return(
            <div className="container-phater">
                <div className="header-phater">
                    <p> El transporte llegará en 10 minutos </p>
                    <button onClick={this.cancel} className="cancel"> Cancelar</button>
                </div> 
                    <div className="body-phater between-lg between-xs">
                        <div className="imagen">
                        <img src={photo}/>
                        </div>
                    </div> 
                <div className="row end-ls">
                    <div className="footer-phater">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="driver">
                                        <Driver />
                                        <Notifications/>
                                        <Calendary/>
                                        <Payments/>
                                        <Alerts />
                                        </div> 
                                    </div>
                                </div>
                             </div>                        
                    </div>
                </div>

        )
    }
}

export default ViewPhater;




                       /* <Notifications />
                                    <Calendary/>
                                    <Payments/>
                                    <Driver />
                                    </div>  */

