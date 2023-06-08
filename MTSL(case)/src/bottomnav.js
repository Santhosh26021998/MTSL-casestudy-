import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';


const BottomNav=()=>{
    const [value,setvalue]=React.useState(0);
    const handlechange=(event,newvalue)=>{
        setvalue(newvalue);
    };
    return(
        <div>
        <Box sx={{ flexGrow: 1 }} color={'primary'}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6"  color={'whitesmoke'}  sx={{ flexGrow: 1 }}>
              ABC Company Pvt Ltd
            </Typography>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT US</Button>
            <Button color="inherit">LOG OUT</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    )
}
export default BottomNav;