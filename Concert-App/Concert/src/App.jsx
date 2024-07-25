import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Navbar/Navbar'
import Concert from './pages/Concert'
import MüslümTicket from './ticketpages/MüslümTicket'
import EminemTicket from './ticketpages/EminemTicket'
import PitbullTicket from './ticketpages/PitbullTicket'
import HadiseTicket from './ticketpages/HadiseTicket'
import SemicenkTicket from './ticketpages/SemicenkTicket'
import LanaTicket from './ticketpages/LanaTicket'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/konserler' element={<Concert />} />
        <Route path='/hakkımızda' element={<About />} />
        <Route path='/müslüm-gürses-bilet' element={<MüslümTicket />} />
        <Route path='/eminem-bilet' element={<EminemTicket />} />
        <Route path='/pitbull-bilet' element={<PitbullTicket />} />
        <Route path='/hadise-bilet' element={<HadiseTicket />} />
        <Route path='/semicenk-bilet' element={<SemicenkTicket />} />
        <Route path='/lana-del-rey-bilet' element={<LanaTicket />} />

      </Routes>
    </div>
  )
}

export default App
