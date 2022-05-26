import { Box } from '@mui/material';
import React from 'react'

function Rightbar() {
    

    return (
        <Box bgcolor={'lightcoral'} flex={2} p={2} sx={{display: {xs: "none",md: "block"}}}>
          Rightbar  
        </Box>
    )
}
export default Rightbar;
