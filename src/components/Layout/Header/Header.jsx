import React from 'react'
import { AppBar, IconButton, Typography, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router'
import { Menu as MenuIcon } from '@material-ui/icons'

const Header = ({ setOpen }) => {
    const history = useHistory()
    
    return (
        <AppBar color='primary'>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography style={{ flexGrow: 1 }}>Academia EA</Typography>
                <Button variant='text' color='inherit' onClick={() => {
                    localStorage.clear()
                    history.push('/login')
                }}>Cerrar Sesion</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
