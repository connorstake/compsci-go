import { Grid } from '@mui/material';

interface ModuleImageProps {
    imagePath: string;
}
export const ModuleImage = ({imagePath} : ModuleImageProps) => {
    return (
        <Grid item xs={12} >
            <img src={imagePath} alt="module image" style={{width: '100%', height: '100%', boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px",borderRadius: 10}}/>
        </Grid>
    )
}