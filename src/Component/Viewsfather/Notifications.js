import React, {Component} from 'react';
import photo from '../Assets/colegio.png';
import Calendar from './Caleny'
import '../Viewsfather/Notifications.css'

class Alerts extends Component{
    render(){
        return(
            <div className="container">
                <div className="header-alerts">
                    <h3>NOTIFICACIONES</h3>
                </div>
                <div className="body-alerts">
                <img src={photo} className="img"/>
                    <h4>Juan Francisco Perez Garcia</h4>
                    <p>3er grado de primaria</p>
                    <hr/>
                    <div className="listHours">
                    <tr>
                        <td>7:00</td>
                    </tr>
                    <tr>
                        <td>7:05</td>
                    </tr>
                    <tr>
                        <td>8:10</td>
                    </tr>
                    <tr>
                        <td>8:15</td>
                    </tr>
                    <tr>
                        <td>2:00</td>
                    </tr>
                    <tr>
                        <td>2:05</td>
                    </tr>
                    <tr>
                        <td>3:10</td>
                    </tr>
                    <tr>
                        <td>3:15</td>
                    </tr>
                    </div>
                    <div className="list">
                    <tr>
                        <td>Salida del domicilio</td>
                    </tr>
                    <tr>
                        <td>Abordo autobus</td>
                    </tr>
                    <tr>
                        <td>Baja del autobus</td>
                    </tr>
                    <tr>
                        <td>Llegada a la escuela</td>
                    </tr>
                    <tr>
                        <td>Salida de la escuela</td>
                    </tr>
                    <tr>
                        <td>Abordo autobus</td>
                    </tr>
                    <tr>
                        <td>Baja del autobus</td>
                    </tr>
                    <tr>
                        <td>Llegada a la escuela</td>
                    </tr>
                    </div>
                    </div>
                    <div className="footer-alert">
                    <Calendar/>
                    </div>
                    </div>
        )
    }

}

export default Alerts;

                    /* <Driver/> */