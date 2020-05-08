import React, { Component } from 'react'; 
import './TeslaBattery.css'; 
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';

class TeslaBattery extends Component {
    render () {
        return (
            <form className="tesla-battery" >
                <h1> Range Per Charge</h1>
                <TeslaCar wheelsize={21} />
                <TeslaNotice /> 
            </form>
        )
    }
}

export default TeslaBattery;