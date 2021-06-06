import React, {Component} from 'react';
import './home.css';
import Header from '../../common/header/Header';
import {withStyles} from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: 'rgb(124, 142, 248)',
        padding: '8px',
        color: '#fff',
        fontWeight: 500,
        fontSize: '1.25rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
});

class Home extends Component{
    constructor(){
        super();
        this.state = {
            moviename: ""
        }
    }
    movieNameChangeHandler = event => {
        this.setState({moviename: event.target.value});
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Header/>
                <div className={classes.upcomingMoviesHeading}>
                <span>Upcoming Movies</span>
                </div>
                <hr style={{backgroundColor: '#e9e9e9'}}/>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                            <GridListTileBar title={movie.title}></GridListTileBar>
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        Find Movies By : 
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="moviename">Movie Name :</InputLabel>
                                    <Input type="" id="moviename" onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}
export default withStyles(styles)(Home);