import React from "react";
import { Grid } from "@mui/material";

interface DialogueProps {
    dialogue: string;
  }
// the Dialogue box contains logice to display the text as if it were being typed out


export const DialogueBox = ({ dialogue}: DialogueProps) => {

    // typeText should update the dialogue state variable, but it doesn't seem to be working

    
    return (
        <Grid style={{backgroundColor: 'black', color: 'white', height: '100%', padding: 10, fontSize: '16px', marginTop: '-1', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
         {dialogue}
        </Grid>
    )
}


