import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem, Autocomplete, IconButton, Stack, Tooltip, Switch, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DrawerMenu from './DrawerMenu';


//data
// import { top100Films } from './data'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  // backgroundColor : 'red',
  justifyContent: 'space-between',
  position: 'relative'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'

}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',

  // display : flex when view port is equal or more than sm
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  height: '80px',
  flex: '0.5',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }

}))

function Navbar({ mode, setMode, sideBar, setSidebar, rightBar, setRightBar }) {

  const [open, setOpen] = useState(false)

  return (
    <AppBar
      position='sticky'
    // sx={{backgroundColor : 'green'}} 
    >
      <StyledToolbar>
        <Box 
          sx={{
            display: 'flex',
            height: { xs: 80, sm: 'auto' },
            padding: { xs: 0, sm: 0 },
            marginRight : { xs : .5, sm : 2},
          }}
        >
          <Box  >

            <Typography
              variant='h6'
              pt={1}
              sx={{
                display: { xs: 'block', sm: 'block' },
                fontFamily: 'roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '.1rem',
                color: 'inherit',
                
              }}
            >
              MeeT
            </Typography>
            {/* <IconButton sx={{display : { sx : 'block', sm :'none'}}}  >
              {mode === 'light' ? <ModeNightOutlinedIcon sx={{ color: 'white' }} onClick={() => setMode('dark')} /> : <LightModeIcon onClick={() => setMode('light')} />}
            </IconButton> */}
          </Box>

          <Stack mt={1}  direction='row' sx={{ display: { xs: 'block', sm: 'none', }, }}>
            <IconButton sx={{padding:'0'}}  onClick={(e)=> setSidebar(!sideBar) } >
              <Tooltip title='Menu' >
                <DrawerMenu appendSide={'left'} />
                {/* <MenuIcon sx={{ color: "white" }} /> */}
              </Tooltip>
            </IconButton>
            <IconButton sx={{padding:'0'}}>
              <Tooltip title='Messenger' >
                <DrawerMenu appendSide={'right'} />
                {/* <ForumIcon sx={{ color: "white" }} /> */}
              </Tooltip>
            </IconButton>
            <IconButton sx={{padding:'0'}}  >
              <Tooltip title='Messenger' >
                {mode === 'light' ? <ModeNightOutlinedIcon sx={{ color: 'white' }} onClick={() => setMode('dark')} /> : <LightModeIcon onClick={() => setMode('light')} />}
              </Tooltip>
            </IconButton>
          </Stack>

        </Box>
        <Search
          sx={{
            backgroundColor: 'background.default',
            color: 'text.primary',
            display: { xs: 'none', sm: 'block' },
            flexGrow : '1',
          }}
        >
          <InputBase error={true} color={'red'} placeholder='...Search' autoFocus={true} />
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <InputBase color={'black'} {...params} error={true} placeholder='...Search' autoFocus={true} />}
          /> */}
        </Search>

        <Icons>
          <IconButton sx={{ color: 'white' }} aria-label="add an alarm">
            <Badge badgeContent={4} color="error">
              <MailIcon color="white" />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'white' }} aria-label="add an alarm">
            <Badge badgeContent={4} color="error">
              <CircleNotificationsIcon color="white" />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'white' }} aria-label="add an alarm">
            <Avatar sx={{ width: 30, height: 30 }}
              onClick={(e) => setOpen(true)}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
          </IconButton>
        </Icons>
        <UserBox mt={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
          {/* <Stack mt={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'fle' }}> */}
            <IconButton  onClick={(e) => setOpen(true)} sx={{ color: 'white' }} aria-label="profile setting">
              <Avatar  sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
            </IconButton>
            {/* <IconButton>
                {mode === 'light' ? <LightModeIcon onClick={() => setMode('dark')} /> : <ModeNightOutlinedIcon onClick={() => setMode('light')} />}
              </IconButton> */}
          {/* </Stack> */}
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Search
          sx={{
            backgroundColor: 'background.default',
            color: 'text.primary',
            width: '80%',
            margin: 2,
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <InputBase error={true} color={'red'} placeholder='...Search' autoFocus={true} />
        </Search>
      </Box>
    </AppBar>
  )
}

export default Navbar