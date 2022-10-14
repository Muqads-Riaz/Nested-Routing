import React from 'react'
import { Typography } from '@mui/material'
import {Button} from '@mui/material'
import{ Box }from '@mui/material'
import { NavLink } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
       <Typography className='heading' mt={10} mb={2}  variant='h3'>Contact Us</Typography>
       <form className='form'>
      <input placeholder='Name' className='bar' type="text"></input>
      <br/>
      <input placeholder='Phone Number' className='bar' type="number"></input>
      <br/>
      <input placeholder='Service Name' className='bar' type="text"></input>
      <br/>
      <input placeholder='Date' className='bar' type="date"></input>
      <br/><br/>
      <Button  variant ="contained">Submit</Button>
       </form>
       <Box className="special-box" > <NavLink className="special-link"  to="/">Go to home Page</NavLink></Box>
    </div>
  )
}
