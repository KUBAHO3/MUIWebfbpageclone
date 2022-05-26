import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box } from '@mui/system';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled (Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: 5,
  width: "50%"
}))

const Icons = styled(Box)(({theme})=>({ display: "flex", alignItems:"center", gap:"20px"

}));
const UserBox = styled(Box)(({theme})=>({ display: "flex", alignItems:"center", gap:"10px"
}))

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position='stick'>
          <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
              HEAVEN Li
            </Typography>
            <AutoAwesomeIcon sx={{display:{xs:"block", sm:"none"}}}/>
            <Search>
              <InputBase placeholder='Search...'  inputProps={{ 'aria-label': 'search' }}></InputBase>
            </Search>
            <Icons>
            <Badge badgeContent={4} color="error" sx={{display:{xs:"none", sm:"block"}}}>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{display:{xs:"none", sm:"block"}}}>
              <Notifications />
            </Badge>
            <Avatar alt="Heaven Linne" sx={{width:30, height:30, display:{xs:"none", sm:"block"}}} src="/static/images/avatar/1.jpg" onClick={e=>setOpen(true)}/>
            <UserBox sx={{display:{ xs:"block", sm:"none"}}} onClick={e=>setOpen(true)}><UserBox>
              <Avatar alt="Heaven Linne" sx={{width:30, height:30}} src="/static/images/avatar/1.jpg" />
              <Typography variant='h6'>Linne</Typography>
            </UserBox>
            </UserBox>
            </Icons>
          </StyledToolbar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e)=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </AppBar>
    )
}
export default Navbar;
