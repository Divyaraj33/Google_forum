import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from '@material-ui/core';
import "./Mainbody.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../images/t-shirt.png";

function Mainbody(){
    return (
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
                    Recent forms
                </div>
                <div className="mainbody_top_right">
                    <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone <ArrowDropDownIcon/></div>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px",fontWeight:"black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px",fontWeight:"black"}}/>
                    </IconButton>
                </div>
            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                <img src={doc_image} className="doc_image"/>
                <div className="doc_card_content">
                    <h5></h5>
                    <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                        <div className="content_left">
                            <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>
                        </div>
                        <MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Mainbody























// import React from 'react'
// import MoreVertIcon from "@material-ui/icons/MoreVert"
// import {IconButton} from "@material-ui/core"
// import UnfoldMoreIcon from "@material-ui/icons/Unfold"

// function Template() {
//   return (
//     <div className="template_Section">
//         <div className="template_top">
//             <div className="template_left">
//                 <span style={{fontSize:"16px",color:"white"}}>Start New Form</span>
//             </div>
//             <div className="template_right">
//                 <div className="gallery_button">
//                     Template gallery_button
//                     <UnfoldMoreIcon />
//                 </div>
//                 <IconButton>
//                     <MoreVertIcon />
//                 </IconButton>
//             </div>
//         </div>
//         <div className="template_body"></div>
//     </div>
//   )
// }
 
// export default Template
