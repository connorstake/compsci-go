
import { Button, Grid} from '@mui/material';
import React, { useState } from 'react';
import { DialogueBox } from '../Components/DialogueBox/DialogueBox';
import textData from '../text.json'

import { CodeMirrorWrapper } from '../Components/CodeMirror/CodeMirror';
import Video from '../Components/Video/Video';

import Request from '../api/Request';

import { Console } from '../Components/Console/Console';
import CorrectAnswerModal from '../Components/Modal/CorrectAnswer/CorrectAnswer';
import { Module } from '../Modules/module';
import { useNavigate } from "react-router-dom";

// import { ChatGPTClient } from '@waylaidwanderer/chatgpt-api';


interface QuestionProps {
    module: Module;
    nextModulePath: string;
}

function Question({ module, nextModulePath } : QuestionProps) {

  const [consoleText, setConsoleText] = useState('');
  const [dialogueText, setDialogueText] = useState('');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [completedModalOpen, setCompletedModalOpen] = useState(false);

  const navigate = useNavigate();




  // const currentModule = new TwoSumModule();
  // const currentModule = new ValidateSubsequenceModule();
  const value = localStorage.getItem(module.name) || module.startingCode;

  const nextModule = () => {
        navigate("/" + nextModulePath);
        navigate(0)
  }

  const typeText = (dialogue: string, dialogueHolder: string, nextIndex: number) => {
    if (dialogue.length > 0) {
      setIsTyping(true);
      dialogueHolder += dialogue[0];
      dialogue = dialogue.slice(1);
      setDialogueText(dialogueHolder);
      setTimeout(() => {
        typeText(dialogue, dialogueHolder, nextIndex);
      }, 10);
    } else {
      setIsTyping(false);
      setCurrentDialogueIndex(nextIndex);
    }
  };

  React.useEffect(() => {
    console.log(module, currentDialogueIndex, isTyping, dialogueText)
    if (!isTyping) {
    const currentDialogue = module.dialogueByIdx(currentDialogueIndex);
    if (currentDialogue !== '') {
      typeText(currentDialogue, '', currentDialogueIndex + 1);
    }
  }
  },[module, isTyping]);

  const submitAnswerHandler = async () => {
    setConsoleText('Sending Transmission...');
    const request = new Request(module.solutionURI());
    const value = localStorage.getItem(module.name) || module.startingCode;
    const res = await request.post({ answer: value });
    if (!res.success) {
      setConsoleText(res.output);
    } else {
      setConsoleText('Transmission Received!');
      setCompletedModalOpen(true);
    }
    
  };

  return (
    <Grid container style={{height: '100vh', backgroundColor: '#0d1b2a', }}>

      <Grid item xs={12} style={{position: 'absolute', top: '100px'}}>
        <CorrectAnswerModal isOpen={completedModalOpen} completedText={module.completedText} moduleName={module.name} nextModule={nextModule}/>
      </Grid>
      
      
      <Grid item xs={5} style={{padding: 10}} >
        <Grid item xs={12} >
          <Video src={module.videoPath}/>
          {/* <img alt='scientist' style={{width: '100%', height: '500px', border: 'solid grey 3px'}} src={String(scientistImg)}></img> */}
        </Grid>
        <Grid>
          <DialogueBox dialogue={dialogueText}/>
        </Grid>   
      </Grid>
      <Grid item xs={7}>
        <Grid item xs={12}>
          <CodeMirrorWrapper value={value} localStorageKey={module.name}/>
        </Grid>
          <Grid item xs={12} style={{backgroundColor: 'black', minHeight: '100px', color: 'white', fontSize: 14, padding: 15}}>
            <Console consoleText={consoleText}/>
          </Grid>
          {!isTyping &&
          <Grid item xs={3} style={{marginTop: '10px'}}>
            <Button onClick={submitAnswerHandler} style={{backgroundColor: "black", color: "green", border:'solid green 2px'}}>Send Transmission</Button>
          </Grid>
          }
      </Grid>
    </Grid>
  )
}


export default Question;
