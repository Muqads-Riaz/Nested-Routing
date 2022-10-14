import React from 'react'
import { Typography } from '@mui/material'
import { Modal } from '@mui/material';
import { useState } from 'react';
import {Container }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Button }from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


export default function Feedback() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <Modal open={open} >
       <Container className='modal'>
       <div className='cut-btn' onClick={()=>setOpen(false)}><CloseIcon/></div>
       <Typography className='heading' variant='h4'>Feedback</Typography>
       <div  className='feedback'>
        <Typography m={2} variant="h5" >Rate your Experience</Typography>
        <Typography m={2} variant="p" >How happy are you with our experience?</Typography>
        <br/>
        <SentimentVeryDissatisfiedIcon/>
        <SentimentDissatisfiedIcon/>
        <SentimentSatisfiedIcon/>
        <SentimentSatisfiedAltIcon/>
        <SentimentVerySatisfiedIcon/>
        <div className='margin'>
        <label >How could we improve?</label>
        <br/>
        <textarea></textarea>
        </div>
        <div className='margin'>
        <label >Email(Optional)</label>
        <br/>
        <textarea></textarea>
        </div>
        <Button sx={{backgroundColor:"black",margin:"5px"}} variant='contained'>Submit</Button>
       </div>
       </Container>
       </Modal>
    </div>
  )
}
