import React from 'react';
import { Modal, Backdrop, Fade, IconButton, Grid, Button} from '@mui/material'
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';



const PaperStyle = styled('div')({
    backgroundColor: "black",
    color: "green",
    padding: "10px",
});

const CorrectAnswerModal: React.FC<{isOpen: boolean, completedText?: string, moduleName?: string, nextModule : ()=>void, spaceTimeComplexity: {space: string, time: string, explanation: string}}> = ({isOpen, completedText, moduleName, nextModule, spaceTimeComplexity}) => {

  return (
      <Modal
        open={isOpen}
        // BackdropComponent={Backdrop}
        style={{width: '500px', paddingTop: '150px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
        hideBackdrop={true}
      >
        <Fade in={isOpen}>
            <Grid container style={{ backgroundColor: "white", color: "black",padding: 20, boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px", borderRadius: 10}}>
                <Grid item xs={12}>
                    <h2>{moduleName?.toUpperCase()}</h2>
                    <p>{completedText}</p>
                    <p><span style={{color: '#006d77', fontWeight: 'bold'}}> Space Complexity:</span> <span style={{color: '#e29578', fontWeight: 'bold'}}>{spaceTimeComplexity.space}</span></p>
                    <p><span style={{color: '#006d77', fontWeight: 'bold'}}> Time Complexity:</span> <span style={{color: '#e29578', fontWeight: 'bold'}}>{spaceTimeComplexity.time}</span></p>
                    <p>{spaceTimeComplexity.explanation}</p>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button onClick={nextModule} style={{backgroundColor: "#006d77", color: "white"}}> Next Section </Button>
                </Grid>
            </Grid>
        </Fade>
      </Modal>
  );
};

export default CorrectAnswerModal;