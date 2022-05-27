import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

function Posts(props) {
    
console.log(props)
    return (
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title={props.title}
                subheader={props.subheader}
            />
            <CardMedia
                component="img"
                height="15%"
                image={props.image}
                alt={props.alt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
               
         </Card>
    )
}

export default Posts;
