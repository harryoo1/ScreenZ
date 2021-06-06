import React, {Component} from 'react';
import './bookshow.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'; 
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookShow extends Component {
    constructor(){
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: ""
        }
    }
    backToHandler = () =>
    {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    locationSelectHandler = event => {
        this.setState({location: event.target.value})
    }
    languageSelectHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateSelectHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showTimeSelectHandler = event => {
        this.setState({ showTime: event.target.value });
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
                <div>
                    <Card className="cardStyle">
                        <CardContent>
                        <Typography variant="headline" component="h2" onClick={this.backToHandler} style={{marginBottom: 10}}>
                            Book Show
                        </Typography>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location :</InputLabel>
                            <Select
                                value={this.state.location}
                                onChange={this.locationSelectHandler}>
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                        </FormControl>
                        <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageSelectHandler}>
                                    {language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateSelectHandler}>
                                    {showDate.map(sd => (
                                        <MenuItem key={"showDate" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showTime">Choose Show Time:</InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showTimeSelectHandler}>
                                    {showTime.map(st => (
                                        <MenuItem key={"showTime" + st.id} value={st.showTime}>
                                            {st.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}
export default BookShow;