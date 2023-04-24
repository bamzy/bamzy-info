import  Typography  from "@mui/material/Typography";

import {Error} from '@mui/icons-material';
import {Grid} from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const ErrorPage = (props) => {
    return (
        <Grid container spacing={1} mt={10}>
            <Grid xs={12} justifyContent={"center"} alignItems={"center"}>
                {/* <Item> */}
                <Typography  align="center" >
                    <Error   color="error" sx={{fontSize:100}} />
                </Typography>

                {/* </Item> */}
            </Grid>
            <Grid xs={12}>
                {/* <Item> */}
                <Typography variant="h2" mt={0} color="text.secondary" align="center" >
                    Error {props.code} happened! 
                </Typography>

                {/* </Item> */}
            </Grid>
            <Grid xs={12}>
                {/* <Item> */}
                <Typography variant="h4" mt={0} color="text.secondary" align="center" >
                     please try again later
                </Typography>
                
                {/* </Item> */}
            </Grid>
            
        </Grid>
        
  )
}

export default ErrorPage;