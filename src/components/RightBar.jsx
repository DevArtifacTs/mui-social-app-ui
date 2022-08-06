import React from 'react'
import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

function RightBar() {
  return (
    <Box
      // backgroundColor='red'
      sx={{ color: 'black', display: { xs: 'none', sm: 'block' }, position: 'relative', }}
      flex={2} p={2}
    >
      <Box
        backgroundColor='#f5f5f5'
        fontWeight={300}
        flex={1}
        sx={{
          position: { sm: 'fixed' },
          marginRight: '2rem',
          height: '100%'
        }}
        bgcolor={"background.default"} color={'text.primary'}
      >
        <Typography variant='h6' mt={1} mb={2} ml={2} >
          Online friends
        </Typography>
        <AvatarGroup sx={{ display: 'flex', justifyContent: 'start', marginLeft: '1rem' }} max={5}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' mt={4} mb={2} ml={2}>
          latest Post
        </Typography>
        <ImageList sx={{ width: '100%', height: '20%' }} cols={3} rowHeight={100} gap={5} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant='h6' mt={4} mb={2} ml={2} >
          latest Conversations
        </Typography>
        <Box component='div'sx={{height : '100%', overFlow :'auto' }} >
          <List
            sx={{
              width: '100%',
              maxHeight: '100%',
              bgcolor: 'background.paper',
              // bgcolor: 'green',
              overFlowY: 'auto',
              // border: '1px solid green'
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/5.jpg" />
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
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/6.jpg" />
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
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/8.jpg" />
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
    </Box>
  )
}

export default RightBar