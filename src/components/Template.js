import React from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {IconButton} from "@material-ui/core"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"

import blank from "../images/b.png"
import party from "../images/p.png"
import contact from "../images/j.png"
import uuid from "react-uuid"
import { useHistory } from 'react-router-dom';

import "./Template.css"

function Template() {
    const history = useHistory();

    const createForm = ()=>{
        const id_ =uuid();

        history.push("/form/"+id_)
    }
  return (
    <div className="template_Section">
        <div className="template_top">
            <div className="template_left">
                <span style={{fontSize:"16px",color:"black"}}>Start New Form</span>
            </div>
            <div className="template_right">
                <div className="gallery_button">
                    Template gallery
                    <UnfoldMoreIcon />
                </div>
                <IconButton>
                    <MoreVertIcon fontSize="small"/>
                </IconButton>
            </div>
        </div>
        <div className="template_body">
            <div className="card" onClick={createForm}>
                <img className="card_image" src={blank} alt="no image"/>
                <p className="card_title">Blank</p>
            </div>

            <div className="card">
                <img className="card_image" src={party} alt="no image"/>
                <p className="card_title">Party Invite</p>  
            </div>
            <div className="card">
                <img className="card_image" src={contact} alt="no image"/>
                <p className="card_title">Contact Information</p>
            </div>
        </div>
    </div>
  );
}
 
export default Template
