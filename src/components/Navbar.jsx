import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem, Autocomplete, IconButton } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

//data
// import { top100Films } from './data'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
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
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }

}))

function Navbar() {

  const [open, setOpen] = useState(false)


  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>PeoGather</Typography>
        {/* display when xs and hide when sm or more than sm */}
        <TravelExploreIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search
        sx={{
          backgroundColor : 'background.default',
          color : 'text.primary',
        }}
        >
          <InputBase error={true} color={'red'}  placeholder='...Search' autoFocus={true} /> 
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <InputBase color={'black'} {...params} error={true} placeholder='...Search' autoFocus={true} />}
          /> */}
        </Search>
        {/* <Icons sx={{display : {xs : 'none', sm : 'block'}}}> */}
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
        <UserBox onClick={(e) => setOpen(true)}>
          <IconButton sx={{ color: 'white' }} aria-label="add an alarm">
            <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
          </IconButton>
          <Typography variant='h6'>Jessi</Typography>
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
    </AppBar>
  )
}

export default Navbar