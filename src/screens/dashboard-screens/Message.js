import React from 'react'
import { Typography } from '@mui/material'
import { Modal } from '@mui/material';
import { useState } from 'react';
import {Container }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import img2 from "./3.PNG"

export default function Message() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <Modal open={open} >
       <Container className='modal'>
       <div className='cut-btn' onClick={()=>setOpen(false)}><CloseIcon/></div>
       <Typography className='heading' variant='h5'>Messages</Typography>
       <div className='message'><img src={img2}></img></div>
       </Container>
       </Modal>
    </div>
  )
}