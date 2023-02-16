import { Grid  } from '@mui/material';

interface ConsoleProps {
    consoleText: string;
}
export const Console = ({consoleText}: ConsoleProps) => {
   return ( 
    <Grid style={{color: 'green'}}>
        {consoleText}
    </Grid>
   )
}