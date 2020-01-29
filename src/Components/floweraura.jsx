import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Icon } from '@material-ui/core';
import './flowermain.less';

class Floweraura extends Component {
    render() {
        return (
            <div className="main-floweraura">
                <AppBar position="static">
                    <Toolbar>
                        <div className="header">
                            <div className="menuSearch">
                                <Icon className="menu" color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </Icon>
                                <Icon color="inherit" >
                                    <SearchIcon />
                                </Icon>
                            </div>
                            <div className="imageFloweraura">
                                <img src="https://www.floweraura.com/sites/default/files/ssr/static/media/logo.28202f91.svg" />
                            </div>
                            <div>
                                <Icon color="inherit"  >
                                    <ShoppingCartIcon />
                                </Icon>
                                <Icon color="inherit" >
                                    <MoreIcon />
                                </Icon>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default Floweraura