
import { Button, Grid} from '@mui/material';
import React, { useState } from 'react';
import { DialogueBox } from './Components/DialogueBox/DialogueBox';
import textData from './text.json'

import { CodeMirrorWrapper } from './Components/CodeMirror/CodeMirror';
import Video from './Components/Video/Video';

import Request from './api/Request';
import './App.css'
import { Console } from './Components/Console/Console';
import { TwoSumModule } from './Modules/twoSum';
import { ValidateSubsequenceModule } from './Modules/validateSubsequence'
import CorrectAnswerModal from './Components/Modal/CorrectAnswer/CorrectAnswer';
import { ModuleSequence } from './Modules/narrator';
import { Module, Dialog } from './Modules/module';
// import { ChatGPTClient } from '@waylaidwanderer/chatgpt-api';


function App() {

  const [consoleText, setConsoleText] = useState('');
  const serializedState = localStorage.getItem('myEditorState');
  const [dialogueText, setDialogueText] = useState('');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [completedModalOpen, setCompletedModalOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState(new Module("", {dialogueSequence:['']}, '', '', ''));
  const [congratsText, setCongratsText] = useState('');
  const [moduleName , setModuleName] = useState('');
  const [videoPath, setVideoPath] = useState('');



  const moduleSequence = new ModuleSequence(1)


  React.useEffect(() => {
    const module = moduleSequence.current()
    setVideoPath(module.videoPath)
    setModuleName(module.name)
    setCurrentModule(module)
  }, [])
  

  // const currentModule = new TwoSumModule();
  // const currentModule = new ValidateSubsequenceModule();
  const value = localStorage.getItem(currentModule.name) || currentModule.startingCode;


  const nextModule = () => {
    moduleSequence.incrementModuleIdx();
    setCurrentModule(moduleSequence.current());
    setVideoPath(currentModule.videoPath)
    setModuleName(currentModule.name)
    setCurrentDialogueIndex(0);
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
    console.log(currentModule, currentDialogueIndex, isTyping, dialogueText)
    if (!isTyping) {
    const currentDialogue = currentModule.dialogueByIdx(currentDialogueIndex);
    if (currentDialogue !== '') {
      typeText(currentDialogue, '', currentDialogueIndex + 1);
    }
  }
  },[currentModule, isTyping]);

  const submitAnswerHandler = async () => {
    setConsoleText('Sending Transmission...');
    const request = new Request(currentModule.solutionURI());
    const value = localStorage.getItem('myValue') || currentModule.startingCode;
    const res = await request.post({ answer: value });
    if (!res.success) {
      setConsoleText(res.output);
    } else {
      setConsoleText('Transmission Received!');
      setCongratsText(currentModule.completedText);
      setCompletedModalOpen(true);
    }
    
  };

  return (
    <Grid container style={{height: '100vh', backgroundColor: '#0d1b2a', }}>
    </Grid>
  )
}


export default App;
