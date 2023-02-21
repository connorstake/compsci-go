import React from 'react';
import { Modal, Backdrop, Fade, IconButton, Grid, Button} from '@mui/material'
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';



const PaperStyle = styled('div')({
    backgroundColor: "black",
    color: "green",
    padding: "10px",
});

const CorrectAnswerModal: React.FC<{isOpen: boolean, completedText?: string, moduleName?: string, nextModule : ()=>void}> = ({isOpen, completedText, moduleName, nextModule}) => {

  return (
      <Modal
        open={isOpen}
        // BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        style={{width: '500px', margin: '0 auto', paddingTop: '150px', position: 'absolute'}}
      >
        <Fade in={isOpen}>
            <Grid container style={{ backgroundColor: "black", color: "green",padding: "10px", border: 'solid green 2px'}}>
                <Grid item xs={12}>
                    <h2>{moduleName?.toUpperCase()}</h2>
                    <p>{completedText}</p>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button onClick={nextModule} style={{backgroundColor: "white", color: "green"}}> Next Section </Button>
                </Grid>
            </Grid>
        </Fade>
      </Modal>
  );
};

export default CorrectAnswerModal;