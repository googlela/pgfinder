import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './header.css';
import TopMenu from "../topmenu/topmenu";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class Header extends React.Component {
    render() {
        const classes = withStyles(useStyles)

        return (
            <div className="header_start" >
                <Container maxWidth="lg" className="header container">
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={2} lg={2}>
                                <img
                                    src='/logo192.png'
                                    className="App-logo" alt="logo"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TopMenu />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                name:hello tushar
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </div>
        );
    }
}
export default Header;
