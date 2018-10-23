import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { NavLink } from 'react-router-dom';
import Search from './Search';

const styleIcon = {
    fontSize: 36,
    marginLeft: 20,
    marginRight:20,
    color: 'black'
}

export default class TopMenu extends Component {
    render(){
        return(
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title"
                                color="inherit"
                                style={{marginRight:40, fontSize:30}}>
                        Happy dogs
                    </Typography>

                    <NavLink to="/"
                        style={{ textDecoration: 'none' }}>
                        <Button>HOME</Button>
                    </NavLink>

                    <NavLink to="/about"
                        style={{ textDecoration: 'none' }}>
                        <Button>ABOUT</Button>
                    </NavLink>

                    <NavLink to="/blog"
                        style={{ textDecoration: 'none' }}>
                        <Button>BLOG</Button>
                    </NavLink>

                    <NavLink to="/shop"
                        style={{ textDecoration: 'none' }}>
                        <Button>SHOP</Button>
                    </NavLink>

                    <Search />

                    <div>
                        <NavLink to="/shoppingCart" style={styleIcon}><AddShoppingCartIcon /></NavLink>
                        <NavLink to="/myAccount" style={styleIcon}><AccountCircle /></NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}