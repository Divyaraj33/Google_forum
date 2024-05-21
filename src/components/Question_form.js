import React, {useState,useEffect} from 'react'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BsTrash} from "react-icons/bs"
import { IconButton } from '@material-ui/core';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {BsFileText} from "react-icons/bs"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import {FcRightUp, FcUndo} from "react-icons/fc"
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Question_form.css"

function QuestionForm() {
    const [questions, setQuestions] = useState([
        {
            questionText: "Which is the capital city of Karnataka?",
            questionType: "radio",
            options: [
                { optionText: "Bengaluru" },
                { optionText: "Belgavi" },
                { optionText: "Hubli" },
                { optionText: "Mandya" },
            ],
            open: true,
            required: false,
        },
    ]);
    function removeOption(i, j){
        var removeOptionQuestion = [...questions];
        if(removeOptionQuestion[i].options.length >1){
            removeOptionQuestion[i].options.splice(j,1);
            setQuestions(removeOptionQuestion)
            console.log(i + "__" + j);
        }
    }
    function addOption(i){
        var optionOfQuestion = [...questions];
        if(optionOfQuestion[i].options.length < 5){
            optionOfQuestion[i].options.push({optionText: "Option" + (optionOfQuestion[i].options.length + 1)})
        } else{
            console.log("Max 5 options");
        }
        setQuestions(optionOfQuestion)
    }
    function copyQuestion(i){
        expandCloseAll();
        let qs = [...questions];
        var newQuestions = qs[i]

        setQuestions([...questions, newQuestions])
    }
    function deleteQuestion(i){
        let qs = [...questions];
        if(questions.length >1){
            qs.splice(i, 1);
        }

        setQuestions(qs)
    }
    function requiredQuestion(i){
        var reqQuestion = [...questions];

        reqQuestion[i].required = ! reqQuestion[i].required

        console.log(reqQuestion[i].required+" "+i);
        setQuestions(reqQuestion)
    }
    function addMoreQuestionField(){

        expandCloseAll();
        setQuestions([...questions,
            {questionText: "Question", questionType:"radio", options: [{optionText: "option 1"}], open: true, required:false}]
        );
    }
    function onDragEnd(result){
        if(!result.destination){
            return;
        }
        var itemgg = [...questions];
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        );
        setQuestions(itemF);
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
    };
    function expandCloseAll(){
        let qs = [...questions];
        for(let j =0;j< qs.length;j++){
            qs[j].open = false;
        }
        setQuestions(qs);
        }
    function handleExpand(i){
        let qs = [...questions];
        for(let j=0;j<qs.length;j++){
            if(i == j){
                qs[i].open = true;
            }else{
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }
    function questionsUI() {
        return questions.map((ques, i) => (
            <Draggable key={i} draggableId={i + 'id'} index={i}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div>
                        <div style={{marginBottom: "0px"}}>
                            <div style={{width: '100%',marginBottom:'0px'}}>
                                <DragIndicatorIcon style={{transform: "rotate(-90deg)", color:'#DAE0E2',
                                position:"relative",left:"300px"}} fontSize="small" />
                            </div>

                            <div>
<Accordion expanded={questions[i].open} onChange={()=>{handleExpand(i)}} className={questions[i].open? 'add border' : ""}>

    <AccordionSummary aria-controls="panelia-content" id="panelia-header" elevation={1} style={{ width: '100%' }}>
        <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }}>
        </Typography>
    </AccordionSummary>
    { questions[i].open ? (
        <div className="question_boxes">
    <AccordionDetails className="add_question">
        <div className="add_question_top">
            <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[i].questionText = e.target.value;
                setQuestions(newQuestions);
            }} />
            <CropOriginalIcon style={{ color: "#5f6368" }} />
            <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }} value={ques.questionType} onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[i].questionType = e.target.value;
                setQuestions(newQuestions);
            }}>
                <MenuItem id="text" value="text"> <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph</MenuItem>
                <MenuItem id="checkbox" value="checkbox"> <CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked /> Checkboxes</MenuItem>
                <MenuItem id="radio" value="radio"> <Radio style={{ marginRight: "10px", color: "#70757a" }} checked /> Multiple Choice</MenuItem>
            </Select>
        </div>
        {ques.options.map((op, j) => (
            <div className="add_question_body" key={j}>
                {
                    (ques.questionType!= "text")?
                        <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                }
                <div>
                    <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[i].options[j].optionText = e.target.value;
                        setQuestions(newQuestions);
                    }} />
                </div>

                <CropOriginalIcon style={{ color: "#5f6368" }} />

                <IconButton aria-label="delete">
                    <CloseIcon onClick={()=>{removeOption(i, j)}}/>
                </IconButton>
            </div>
        ))}

        {ques.options.length < 5 ? (
            <div className="add_question_body">
                <FormControlLabel disabled control={

            (ques.questionType !== "text") ? 
            <input type={ques.questionType} color="primary" inputProps={{'aria-label': 'secondary checkbox'}}
                style={{marginLeft:"10px",marginRight:"10px"}} disabled/> :
            <ShortTextIcon style={{marginLeft:"10px"}} />
            } label={
            <div>
            <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"></input>
            <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>Add option</Button> 
        </div>
    } />
    </div>
): ""}


        <div className="add_footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="add_question_button_left">
            <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>
                <FcRightUp style={{ border: "2px solid #4285f4", padding: "2px", marginRight: "8px" }} />Answer Key
            </Button>
            </div>
        <div className="add_question_bottom" style={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="copy" onClick={()=>{copyQuestion(i)}}>
                <FilterNoneIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                <BsTrash />
            </IconButton>
            <span style={{ color: "#5f6368", fontSize: "13px" }}>Required</span>
            <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} checked={false} />
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
    </div>

    </AccordionDetails>
    <div className="question_edit">
        <AddCircleOutlineIcon   onClick={addMoreQuestionField} className="edit" />
        <OndemandVideoIcon className="edit" />
        <CropOriginalIcon className="edit" />
        <TextFieldsIcon className="edit" />
         
    </div>
    </div>): " "}
</Accordion>
</div>


                        </div>
                    </div>
                 </div>
                )}
                </Draggable>
        ))
    }   

    return (
        <div>
            <div className="question_form">
                <br></br>
                <div className="section">
                    <div className="question_title_section">
                        <div className="question_form_top">
                            <input type="text" className="question_form_top_name" style={{ color: "black" }} placeholder="Untitled document" />
                            <input type="text" className="question_form_top_desc" placeholder="Add form Description" />
                        </div>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) =>(
                                <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                >
                            
                              {questionsUI()}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}

export default QuestionForm;