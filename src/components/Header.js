import React from 'react'
import "./Header.css"
import MenuIcon from  "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import formimage from "../images/gf.jpeg"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../images/a.png"
import TemporaryDrawer from './TemporaryDrawer'

function Header(){
    return(
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer />
                <img className="photo" src={formimage} alt="no image"/>
                <div className="info">
                    iForms
                </div>
            </div>
            <div className="header_search">
                <IconButton><SearchIcon /></IconButton>
                <input type="text" name="search" placeholder="Search" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarimage} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;