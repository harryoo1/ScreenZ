import React, {Component} from 'react';
import './header.css';
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="primary">Primary</Button>
            </div>
        )
    }
}
export default Header;