
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



function App() {

  const [consoleText, setConsoleText] = useState('');
  const serializedState = localStorage.getItem('myEditorState');
  const [dialogueText, setDialogueText] = useState('');
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  // const currentModule = new TwoSumModule();
  const currentModule = new ValidateSubsequenceModule();
  const value = localStorage.getItem('myValue') || currentModule.startingCode;


  const typeText = (dialogue: string, dialogueHolder: string, nextIndex: number) => {
    if (dialogue.length > 0) {
      setIsTyping(true);
      dialogueHolder += dialogue[0];
      dialogue = dialogue.slice(1);
      setDialogueText(dialogueHolder);
      setTimeout(() => {
        typeText(dialogue, dialogueHolder, nextIndex);
      }, 60);
    } else {
      setIsTyping(false);
      setCurrentDialogueIndex(nextIndex);
    }
  };

  React.useEffect(() => {
    if (!isTyping) {
    const currentDialogue = currentModule.dialogueByIdx(currentDialogueIndex);
    if (currentDialogue !== undefined) {
      typeText(currentDialogue, '', currentDialogueIndex + 1);
    }
  }
  }, [currentDialogueIndex, currentModule]);

  const submitAnswerHandler = async () => {
    setConsoleText('Sending Transmission...');
    const request = new Request(currentModule.solutionURI());
    const value = localStorage.getItem('myValue') || currentModule.startingCode;
    const res = await request.post({ answer: value });
    setConsoleText(await res);
  };

  return (
    <Grid container style={{height: '100vh', backgroundColor: '#1b263b', }}>
      <Grid item xs={5} style={{padding: 10}} >
        <Grid item xs={12} >
          <Video src={currentModule.videoPath}/>
          {/* <img alt='scientist' style={{width: '100%', height: '500px', border: 'solid grey 3px'}} src={String(scientistImg)}></img> */}
        </Grid>
        <Grid>
          <DialogueBox dialogue={dialogueText}/>
        </Grid>   
      </Grid>
      <Grid item xs={7}>
        <Grid item xs={12}>
          <CodeMirrorWrapper value={value}/>
        </Grid>
          <Grid item xs={12} style={{backgroundColor: 'black', minHeight: '100px', color: 'white', fontSize: 14, padding: 15}}>
            <Console consoleText={consoleText}/>
          </Grid>
          <Grid item xs={3} style={{marginTop: '10px'}}>
            <Button onClick={submitAnswerHandler} style={{backgroundColor: "black", color: "green", border:'solid green 2px'}}>Send Transmission</Button>
          </Grid>
      </Grid>
    </Grid>
  )
}


export default App;
