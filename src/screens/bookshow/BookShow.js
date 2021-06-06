import React, {Component} from 'react';
import './bookshow.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'; 
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';

class BookShow extends Component {
    backToHandler = () =>
    {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="back-btn">
                    <Typography onClick={this.backToHandler}>
                        &#60; Back to Home
                    </Typography>
                </div>
            </div>
        );
    }
}
export default BookShow;