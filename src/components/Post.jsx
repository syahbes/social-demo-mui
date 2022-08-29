import React from 'react'

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'



const Post = () => {
  return (
    <div>

<Card sx={{ marginTop : 2 , marginLeft: 5}}>
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
        title="Emoji Match - memory game project"
        subheader="june, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.postimg.cc/02rr1NMX/image.png"
        alt="emoji match"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red"}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      
      </CardActions>
     
    </Card>




    </div>
  )
}

export default Post
