import { Box } from '@mui/material';
import React from 'react'

function Sidebar() {
    

    return (
        <Box bgcolor={'skyblue'} flex={1} p={2} sx={{display: {xs: "none",md: "block"}}}>
           Slidebar 
        </Box>
    )
}
export default Sidebar;
