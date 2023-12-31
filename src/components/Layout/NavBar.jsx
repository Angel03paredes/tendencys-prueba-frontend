import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography onClick={()=>navigate("/ArrowBackIcon")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Prueba Tendencys
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar