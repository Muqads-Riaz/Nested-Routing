import React from 'react'
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';


export default function Navbar() {
    const [menu,setMenu] = useState(false);
    
  return (
    <div>
      <AppBar>
        <Toolbar className='toolbar'>
        <div className='menu'>
            {menu?
             <ul className="nav-links"> 
             <NavLink className="styled-links" to="/" onClick={()=>setMenu(!menu)}><li>Home</li></NavLink>
             <NavLink className="styled-links" to="/Services" onClick={()=>setMenu(!menu)}><li>Services</li></NavLink>
             <NavLink className="styled-links" to="/Dashboard" onClick={()=>setMenu(!menu)}><li>Dashboard</li></NavLink>
             <NavLink className="styled-links" to="/Contact" onClick={()=>setMenu(!menu)}><li>Contact</li></NavLink>
            </ul>: null
            }
            <div className= "mobile-menu-icon" onClick={() => setMenu(!menu)}>
            {menu ? <ClearIcon /> : <MenuIcon />}
            </div>
            <Typography className='logo-lg' variant='h5'>Sanzo Beauty Parlour</Typography>
            <Typography className='logo-sm' variant='h5'>SBP</Typography>
            </div>
            <div className='search-bar'>
            <SearchIcon className='search-icon'/>
            <InputBase placeholder='Search...' />
            </div>
            <div className='icons'>
           <Badge className='margin'  color='error'  badgeContent={4}><MailIcon/></Badge> 
           <Badge className='margin' color='error'  badgeContent={4}><NotificationsIcon/></Badge> 
           <Avatar className='margin' sx={{ width: 25, height: 25 }}>B</Avatar>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
