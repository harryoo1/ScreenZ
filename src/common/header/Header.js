import React, {Component} from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component{
    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                    <div className="header-btn">
                    <Button variant="contained" color="primary">Primary</Button>
                    </div>
                </header>   
            </div>
        )
    }
}
export default Header;