import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const BlueButton = styled(Button)({
    backgroundColor: 'blue',
    color: 'white',
    margin: 10,
    '&:hover': {
        backgroundColor: 'gray',
    },
    '&:disabled': {
        backgroundColor: 'gray',
        color: 'white',
    }
})
const ThemeButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.otherColor.main ,
    color: 'white',
    margin: 10,
    '&:hover': {
        backgroundColor: 'gray',
    },
    '&:disabled': {
        backgroundColor: 'gray',
        color: 'white',
    }
}))

function BasicButton() {
    return (
        <>
            <Button variant="contained" sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                margin: 10,
                '&:hover': {
                    backgroundColor: 'gray',
                },
                '&:disabled': {
                    backgroundColor: 'gray',
                    color: 'white',
                }
            }} >
                Hello World
            </Button>
            <BlueButton>
                Hello styled Button
            </BlueButton>
            <Button
                color='secondary'
            >
                another button
            </Button>
            <ThemeButton>
                ThemeButton
            </ThemeButton>
        </>
    )
}

export default BasicButton