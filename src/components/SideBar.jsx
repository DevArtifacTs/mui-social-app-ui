import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
function SideBar({mode, setMode}) {

  const [menuList, setMenuList] = React.useState([
    { id: 1, icon: <HomeOutlinedIcon />, text: 'Home' },
    { id: 2, icon: <GroupOutlinedIcon />, text: 'Friends' },
    { id: 3, icon: <GroupsOutlinedIcon />, text: 'Groups' },
    { id: 4, icon: <StorefrontOutlinedIcon />, text: 'Store' },
    { id: 5, icon: <VideocamOutlinedIcon />, text: 'Videos' },
    { id: 6, icon: <DescriptionOutlinedIcon />, text: 'Description' },
    { id: 7, icon: <BookmarksOutlinedIcon />, text: 'Bookmarks' },
    { id: 8, icon: <EventNoteOutlinedIcon />, text: 'Events' },
    { id: 9, icon: <SettingsOutlinedIcon />, text: 'Settings' },
    { id: 10, icon: <ModeNightOutlinedIcon />, text: 'Night Mode' },
  ])

  // const handleTheme = () => {
  //   if(mode === 'light'){
  //     setMode('dark')
  //   } else {
  //     setMode('light')
  //   }
  // }

  // xs : 0-600px
  // sm : 601-900px
  // md : 901-1200px
  // lg : 1201-1536


  return (
    <Box sx={{
      // backgroundColor: 'skyblue', 
      position: 'relative',
      display: { xs: 'none', sm: 'block' }
    }}
      flex={1.5} p={2}
    >
      <Box 
        // position='fixed' 
        flex={1}
        sx={{
          // width 0px - 600px display : block
          // else position : fixed
          position : {sm:'fixed'},
        }} 
      >
        <nav aria-label="main mailbox folders">
          <List>
            {menuList.length > 0 &&
              menuList.map(item => {
                if (item.text === 'Night Mode') {
                  return (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton component='a' href={`#${item.text}`}  onClick={(e)=> setMode( mode === 'light' ? 'dark' : 'light')}>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <Switch />
                      </ListItemButton>
                    </ListItem>
                  )
                } else {
                  return (
                    <ListItem key={item.id} disablePadding    >
                      <ListItemButton component='a' href={`#${item.text}`} sx={{paddingLeft : 0}}>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  )

                }
              })

            }

          </List>
        </nav>
      </Box>
    </Box>




  )
}

export default SideBar