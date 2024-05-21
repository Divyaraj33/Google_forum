import React from 'react'
import MenuIcon from  "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import { makeStyles} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Divider from "@material-ui/core/Divider"

import formsimage from "../images/form.png"
import excelsheetimage from "../images/excel.png"
import docimage from "../images/doc.jpeg"
import slidesimage from "../images/slides.png"
import driveimage from "../images/drive.png"
import "./Drawer.css"

import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

// const useStyles = makeStyles({
//     listItem:{
//         marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"
//     }
// });

function TemporaryDrawer() {
    // const classes =useStyles();
    const [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor,open) => (event) =>{
        setState({ ...state, [anchor]: open });
    };

    const list=(anchor)=>(
        <div style={{width:"220px"}} role="presentation">
        <Divider />
            <List>
                <ListItem>
                    <ListItemText style={{fontSize:"48px",margin:"5px"}}>
                        <span style={{color:"blue",fontWeight:"700",fontSize:"22px",fontFamily:"sans-serif"}}>G</span>
                        <span style={{color:"red",fontWeight:"700",fontSize:"22px",fontFamily:"sans-serif"}}>o</span>
                        <span style={{color:"orange",fontWeight:"700",fontSize:"22px",fontFamily:"sans-serif"}}>o</span>
                        <span style={{color:"green",fontWeight:"700",fontSize:"22px",fontFamily:"sans-serif"}}>g</span>
                        <span style={{color:"brown",fontWeight:"700",fontSize:"22px",fontFamily:"sans-serif"}}>l</span>
                        <span style={{color:"gray",fontWeight:"bolder",fontSize:"22px",fontFamily:"sans-serif"}}>e</span>
                        <span style={{color:"black",fontWeight:"500",fontSize:"20px",fontFamily:"sans-serif"}}> Docs</span>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className="list_item">
                    <img src={docimage} style={{height:"25px",width:"25px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"gray"}}>Docs</div>
                </ListItem>

                <ListItem className="list_item">
                    <img src={excelsheetimage} style={{height:"25px",width:"25px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"gray"}}>Sheets</div>
                </ListItem>

                <ListItem className="list_item">
                    <img src={slidesimage} style={{height:"25px",width:"25px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"gray"}}>Slides</div>
                </ListItem>

                <ListItem className="list_item">
                    <img src={formsimage} style={{height:"25px",width:"25px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"gray"}}>Forms</div>
                </ListItem>
            </List>

        <Divider />
        <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <FiSettings />
                <div style={{marginLeft:"20px",fontSize:"17px",color:"grey",fontWeight:"500"}}> Settings</div>
            </ListItem>
            <ListItem className="list_item">
                <BsQuestionCircle />
                <div  style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"grey"}}> Help & Feedback</div>
            </ListItem>
        </List>
        <Divider />

        <List>
        <ListItem className="list_item">
                    <img src={driveimage} style={{height:"25px",width:"25px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"17px",fontWeight:"500",color:"gray"}}>Drive</div>
                </ListItem>
        </List>
        <Divider />
        </div>
    )
  return (
    <div>
        <React.Fragment>
        <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon />
         </IconButton>
         <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
         {list('left')}

         </Drawer>
        </React.Fragment>
    </div>
  )
}

export default TemporaryDrawer;