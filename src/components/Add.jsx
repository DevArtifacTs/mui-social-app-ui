import React from 'react'
import { IconButton, Tooltip, Fab, Modal, Typography, Box, Avatar, styled, TextField, Stack, Button, ButtonGroup } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

const style = {
    position: 'absolute',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '50%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    // set different styles for different screen sizes when view port is 0px - 600px (0 - sm)
    // [theme.breakpoints.down('sm')] : {
    //     display : 'none'
    // }
};

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
   

}))

function Add() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip title="Add"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 28px)", md: 30 }
                }}
                onClick={(e) => setOpen(true)}    
            >
                <IconButton onClick={handleOpen}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style} bgcolor={"background.default"} color={'text.primary'}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color='gray' textAlign='center' >
                        Create a post
                    </Typography>
                    <UserBox >
                        <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
                        <Typography variant='h6'>Jessi</Typography>
                    </UserBox>
                    <TextField
                        id="standard-basic"
                        multiline
                        row={4}
                        label="What's on your mind?"
                        variant="standard"
                        sx={{ width: '100%' }}
                    />
                    <Stack direction='row' gap={1} mt={2} mb={1}>
                        <EmojiEmotionsOutlinedIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideocamIcon color='success' />
                        <PersonAddAlt1Icon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button sx={{width: '800px'}} >Post</Button>
                        <Button  ><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    )
}

export default Add