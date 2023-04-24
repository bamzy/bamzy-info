import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { JsonView, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export default function LogCard(props) {  
  const entryType = props.log._source.name;
  const json = props.log._source;
  darkStyles.fontSize = "8";
  // console.log(darkStyles)
  return (
    
    <Box sx={{ minWidth: 275,mt:2 }} >
      <Card variant="outlined">
        <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              <b><>{props.indexNumber})</></b>ID: {props.log._id}
          </Typography>
          <Typography variant="h4" component="div">
              {entryType?entryType:"UNKNOWN"}
          </Typography>
          <React.Fragment>            
            <JsonView  data={json} shouldInitiallyExpand={(level) => {if(level>1) return false}} style={darkStyles} />
          </React.Fragment>
        </CardContent>
        
    </React.Fragment>
      </Card>
    </Box>
  );
}
