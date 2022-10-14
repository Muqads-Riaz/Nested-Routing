import React from 'react'
import { Typography } from '@mui/material'
import { Modal } from '@mui/material';
import { useState } from 'react';
import {Container }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import img1 from "./1.PNG"

export default function Notification() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <Modal open={open} >
       <Container className='modal'>
       <div className='cut-btn' onClick={()=>setOpen(false)}><CloseIcon/></div>
       <Typography className='heading' variant='h4'>Notification</Typography>
       <div className='notification' ><img src={img1}></img></div>
       </Container>
       </Modal>
    </div>
  )
}