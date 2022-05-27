import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'

function Rightbar() {
    

    return (
        <Box  flex={2} p={2} sx={{display: {xs: "none",md: "block"}}}>
          <Box position="fixed">
            <Typography variant='h6' fontWeight={100}>Online Viewers</Typography>
            <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/portrait-of-african-man-picture-id937265846?k=20&m=937265846&s=612x612&w=0&h=_tXglElGq2P166WjtAB71rcKmeU5SrF6x_x2Yd0GStM=" />
              <Avatar alt="Travis Howard" src="https://media.istockphoto.com/photos/side-view-profile-portrait-of-cute-african-american-girl-picture-id1311433805?k=20&m=1311433805&s=612x612&w=0&h=cL-3drm9SiCAUzCjWLoX3eX2QcNQBh4FBmC5Y1ea4DE=" />
              <Avatar alt="Cindy Baker" src="https://ak.picdn.net/offset/photos/608ac326ca628897cee0bc0a/medium/offset_1106521.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Remy Sharp" src="https://media.gettyimages.com/photos/profile-of-a-young-man-picture-id88624081?s=612x612" />
              <Avatar alt="Travis Howard" src="https://image.shutterstock.com/image-photo/profile-photo-cool-millennial-brunette-260nw-2127842732.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Most suggested</Typography>
             <ImageList cols={3} rowHeight={100}>
               <ImageListItem>
                 <img
                   alt="Cindy Baker" src="https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf5d08bff955e71.gif"
                 />
               </ImageListItem>
               <ImageListItem>
                 <img
                   alt="Cindy Baker" src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-single-family-4.jpg"
                 />
               </ImageListItem>
               <ImageListItem>
                 <img
                   alt="Cindy Baker" src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/contemporary-house-style-9.jpg"
                 />
               </ImageListItem>
             </ImageList>
             <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest comments</Typography>

             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
          </Box>
        </Box>
    )
}
export default Rightbar;
