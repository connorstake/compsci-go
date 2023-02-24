
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(true);


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
      }, 50);
    } else {
      setTimeout(() => {
      setIsTyping(false);
      setCurrentDialogueIndex(nextIndex);
      }, 1000);
    }
  };


  React.useEffect(() => {
    console.log(module, currentDialogueIndex, isTyping, dialogueText)
    if (!isTyping && isPlaying) {
    const currentDialogue = module.dialogueByIdx(currentDialogueIndex);
    if (currentDialogue !== '' && currentDialogueIndex + 1 < currentDialogue.length) {
      typeText(currentDialogue, '', currentDialogueIndex + 1);
    } else {
      setTimeout(() => {
        toggleShowVideo();
        togglePlay();
        setCurrentDialogueIndex(0);
      }
      , 1500);
      
    }
  }
  },[module, isTyping, isPlaying]);

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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const toggleShowVideo = () => {
    setShowVideo(!showVideo);
  }

  const startVideo = () => {
    setShowVideo(true);
    setIsPlaying(true);
  }

  const skipVideo = () => {
    setShowVideo(false);
    setIsPlaying(false);
  }


  return (
    <Grid container style={{height: '100%', backgroundColor: '#0d1b2a',  paddingLeft: 50, paddingRight: 50, paddingBottom: 300, paddingTop: 100 }}>

      <Grid item xs={12} style={{position: 'absolute', top: '100px'}}>
        <CorrectAnswerModal isOpen={completedModalOpen} completedText={module.completedText} moduleName={module.name} nextModule={nextModule}/>
      </Grid>
      <Grid item xs={3} >
        <Grid item xs={12} >
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container style={{position: 'relative'}}>
                      

          <Grid item xs={12} style={{position: 'relative'}} >
          {showVideo && <Grid style={{position: 'absolute', height:'100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex:5}}></Grid> }
            <CodeMirrorWrapper value={value} localStorageKey={module.name}/>
          </Grid>
          {showVideo &&
          <Grid item xs={4} style={{position: 'absolute', right:0, zIndex: 10}}>
            <Video src={module.videoPath} isPlaying={isPlaying}/>
            <DialogueBox dialogue={dialogueText}/>
            {
          showVideo && !isPlaying &&
          <Grid container spacing={2} style={{position: 'relative', zIndex:6 }}>
            <Grid item xs={6}>
              <Button style={{backgroundColor: '#006d77', width:'100%', color:'white', fontWeight:'bold'}} onClick={startVideo}>Play Video</Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{backgroundColor: '#e29578', width:'100%', color:'white', fontWeight:'bold'}} onClick={skipVideo}>Skip Video</Button>
            </Grid>
          </Grid> 
          }
          </Grid>
          }
        </Grid>
          <Grid item xs={12} style={{backgroundColor: 'black', minHeight: '100px', color: 'white', fontSize: 14, padding: 15}}>
            <Console consoleText={consoleText}/>
          </Grid>
          {!showVideo &&
          <Grid>
          <Grid item xs={3} style={{marginTop: '10px'}}>
            <Button onClick={submitAnswerHandler} style={{backgroundColor: "black", color: "green", border:'solid green 2px'}}>Send Transmission</Button>
          </Grid>
          {/* <Grid>
            <Button onClick={startVideo} style={{backgroundColor: "black", color: "green", border:'solid green 2px'}}>Show Video</Button>
          </Grid> */}
          </Grid>
          }
      </Grid>
    </Grid>
  )
}


export default Question;
