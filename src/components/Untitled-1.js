<div>
<Accordion expanded={questions[i].open} className={questions.open ? 'add border' : ""}>
    <AccordionSummary aria-controls="panelia-content" id="panelia-header" elevation={1} style={{ width: '100%' }}>
        {questions[i].open ? (
            <div className="saved_questions">
                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }}>
                    {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.options.map((op, j) => (

                    <div key={j}>
                        <div style={{ display: 'flex' }}>
                            <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px' }} required={ques.type} />}
                                label={
                                    <Typography style={{
                                        fontFamily: 'Roboto, Arial, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: '400',
                                        letterSpacing: '.2px',
                                        lineHeight: '20px',
                                        color: '#202124'
                                    }}>
                                        {ques.options[j].optionText}
                                    </Typography>
                                }/>
                        </div>
                    </div>
                ))}
            </div>
        ) : null}
    </AccordionSummary>
    <div className="question_boxes">
        <AccordionDetails className="add_question">
            <div className="add_question_top">
                <input type="text" className="question" placeholder="Question" value={ques.questionText}></input>
                <CropOriginalIcon style={{color:"#5f6368"}} />
                    <Select className="select" style={{color:"#5f6368", fontSize:"13px"}} >
                    <MenuItem id="text" value="Text" > <SubjectIcon style={{marginRight:"10px"}}  /> Paragraph</MenuItem> 
                    <MenuItem id="checkbox"  value="Checkbox" ><CheckBoxIcon style={{marginright:"10px",color:"#70757a"}} checked/> Checkboxes</MenuItem>
                    <MenuItem id="radio" value="Radio" > <Radio style={{marginRight:"10px",color:"#70757a"}} checked/> Multiple Choice</MenuItem>
                                </Select>
                            </div>
                            {ques.options.map((op, j) => (
                                <div className="add_question_body" key={j}>
                                {
                                    (ques.questionType !== "text") ?
                                    <React.Fragment>
                                     <input type={ques.questionType} style={{ marginRight: "10px" }} />:
                                    <ShortTextIcon style={{ marginRight: "10px" }} />
                                     </React.Fragment>
                                  : null 
                                }
                                <div>
                                    <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText}></input>
                                </div>
                
                                <CropOriginalIcon style={{ color: "#5f6368" }} />
                                
                                <IconButton aria-label="delete">
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        ))}

                    </AccordionDetails>
                </div>
            </Accordion>
            </div>
