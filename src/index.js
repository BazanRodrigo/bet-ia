import React, {Component} from 'react';
import Logo from './assets/logobetia.png';

class Index extends Component {
    render() {
        return(
        <div>
            <img src={process.env.PUBLIC_URL+"./logobetia.png"} width="192" alt="logo"></img>
        </div>
        )
    }
}

export default Index;