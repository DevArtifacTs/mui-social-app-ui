import React, { useState } from 'react'
// import BasicButton from './components/BasicButton'
import RightBar from './components/RightBar'
import Feed from './components/Feed'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material'
import Add from './components/Add'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DrawerMenu from './components/DrawerMenu';

function App() {

  const [mode, setMode] = useState('light')
  const [sideBar, setSidebar] = useState(false)
  const [rightBar, setRightBar] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode : mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={'text.primary'} >
          <Navbar mode={mode}  setMode={setMode} sideBar={sideBar} setSidebar={setSidebar} rightBar={rightBar} setRightBar={setRightBar}  />
          <DrawerMenu/>
          <Stack direction='row' spacing={2} justifyContent='space-between' >
              <SideBar mode={mode}  setMode={setMode}/>
              <Feed/>
              <RightBar/>
          </Stack>
          <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App