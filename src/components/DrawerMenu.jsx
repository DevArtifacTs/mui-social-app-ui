import React from 'react'
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Tooltip    } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ForumIcon from '@mui/icons-material/Forum';

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

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
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