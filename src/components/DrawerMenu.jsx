import React from 'react'
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Tooltip    } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ForumIcon from '@mui/icons-material/Forum';

//sidebar
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

//components
import SideBar from './SideBar';
import RightBar from './RightBar';

function DrawerMenu({ appendSide}) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const [menuList, setMenuList] = React.useState([
        
      ])

      React.useEffect(()=> {
        if ( appendSide === 'left'){
            setMenuList([
            { id: 1, icon: <HomeOutlinedIcon />, text: 'Home' },
            { id: 2, icon: <GroupOutlinedIcon />, text: 'Friends' },
            { id: 3, icon: <GroupsOutlinedIcon />, text: 'Groups' },
            { id: 4, icon: <StorefrontOutlinedIcon />, text: 'Store' },
            { id: 5, icon: <VideocamOutlinedIcon />, text: 'Videos' },
            { id: 6, icon: <DescriptionOutlinedIcon />, text: 'Description' },
            { id: 7, icon: <BookmarksOutlinedIcon />, text: 'Bookmarks' },
            { id: 8, icon: <EventNoteOutlinedIcon />, text: 'Events' },
            { id: 9, icon: <SettingsOutlinedIcon />, text: 'Settings' },
        ])
        } 
        else if ( appendSide === 'right'){
            setMenuList('')
        }
      }, [appendSide])


      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          {/* <SideBar/> */}
          <List>
          {menuList.length > 0 &&
              menuList.map(item => {
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
              })
            }
          </List>
        </Box>
      );

  return (
    <div>
    {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
    { [ appendSide ==='left' ? 'left' : 'right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Tooltip title='Menu' >
            <IconButton onClick={toggleDrawer(anchor, true)}>
                {anchor === 'left' ? <MenuIcon sx={{ color: "white" }} />  : <ForumIcon sx={{ color: "white" }} />}
            </IconButton>
        </Tooltip>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  )
}

export default DrawerMenu