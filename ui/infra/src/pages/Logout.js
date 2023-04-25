import  Typography  from "@mui/material/Typography";

import {Info} from '@mui/icons-material';
import {Grid} from "@mui/material";


const Logout = (props) => {    
    return (
        <Grid container spacing={1} mt={10}>
            <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
                <Typography  align="center" >
                    <Info   color="warning" sx={{fontSize:100}} />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" mt={0} color="text.secondary" align="center" >
                    You have been logged out
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" mt={0} color="text.secondary" align="center" >
                     please log in again if you need access to admin dashboard
                </Typography>                
            </Grid>            
        </Grid>        
    )
}

export default Logout;