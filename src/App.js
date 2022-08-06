import React, { useState } from 'react'
// import BasicButton from './components/BasicButton'
import RightBar from './components/RightBar'
import Feed from './components/Feed'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material'
import Add from './components/Add'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode : mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={'text.primary'} >
          <Navbar/>
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