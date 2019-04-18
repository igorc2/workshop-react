import React, { Component } from 'react';
import logo from '../logo.svg';
import { withRouter, Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Typography, Grid, IconButton } from '@material-ui/core';
import { ShoppingCart, Favorite, AccountCircle } from '@material-ui/icons';

class BookStoreAppBar extends Component {

    goTo = path => {

    }
    

    render() {
        console.log(this.classes);
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='fixed' color="default">
                    <Toolbar>
                        <Grid container direction='row' alignItems='center' >
                            {/* <Grid container direction='row' alignItems='center' className={logoContainer}>  */}
                            <Grid
                                container
                                item
                                direction="row"
                                alignItems="center"
                                xs={3}
                                md={3}
                                sm={6}
                                lg={3}
                                justify='space-between'
                                className={classes.logoContainer}
                            >
                                <img src={logo} alt='logo' className={classes.img}/>
                                <Typography>
                                    Books
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="row"
                                alignItems="center"
                                xs={3}
                                md={3}
                                sm={6}
                                lg={2}
                                justify='space-between'
                            >
                                <IconButton color='inherit'>
                                    <Badge badgeContent={3} color="secondary">
                                        <Link to="shopping">
                                            <ShoppingCart />
                                        </Link>
                                    </Badge>
                                </IconButton>
                                <IconButton color='inherit'>
                                    <Badge badgeContent={2} color="secondary">
                                        <Link to='wishlist'>
                                            <Favorite />
                                        </Link>
                                    </Badge>
                                </IconButton>
                                <IconButton color='inherit' onClick={()=> this.goTo('wishList')}>
                                    <AccountCircle />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1
    },
    logoContainer: {
        cursor: 'pointer'
    },
    img: {
        height: 50,
        width: 50
    }
};

export default withRouter(withStyles(styles)(BookStoreAppBar));