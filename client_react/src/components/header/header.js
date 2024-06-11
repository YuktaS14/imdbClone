import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, InputBase, styled, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'


const Header = () => {
    return (
      
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                        </IconButton>

                        <Link to="/" className="header__logo">
                            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb logo" />
                        </Link>

                        <IconButton
                            size="large"
                            color="inherit"
                        >

                        <SearchIcon />

                        </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Header;