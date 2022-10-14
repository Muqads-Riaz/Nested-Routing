import React from 'react'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from '../screens/Home'
import Services from '../screens/Services'
import Contact from '../screens/Contact'
import Navbar from '../component/Navbar'
import Dashboard from '../screens/Dashboard'
import Message from '../screens/dashboard-screens/Message'
import Notification from '../screens/dashboard-screens/Notification'
import Feedback from '../screens/dashboard-screens/Feedback'
export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/dashboard/' element={<Dashboard/>}>
            <Route path='/dashboard/message' element={<Message/>} />
            <Route path='/dashboard/feedback' element={<Feedback/>} />
            <Route path='/dashboard/notification' element={<Notification/>} />
            </Route>
            <Route path='/*' element={<Navigate to ="/"/>} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
