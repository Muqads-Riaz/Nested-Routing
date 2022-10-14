import React from 'react'
import { Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
       <Typography className='heading' mt={10} mb={2}  variant='h3'>Dashboard</Typography>
       <ul className="nested-main"> 
             <NavLink className="nested-links" to="/dashboard/message" ><li>Message</li></NavLink>
             <NavLink  className="nested-links" to="/dashboard/feedback" ><li>Feedback</li></NavLink>
             <NavLink  className="nested-links" to="/dashboard/notification" ><li>Notification</li></NavLink>
             <Outlet/>
            </ul>
    </div>
  )
}
