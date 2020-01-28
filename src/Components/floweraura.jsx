import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

export default class Floweraura extends Component {
    render() {
        return (
            <div className="hearder">
                <AppBar position="static">
                    <Toolbar >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer" >
                            <MenuIcon />
                        </IconButton>
                        <IconButton aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}