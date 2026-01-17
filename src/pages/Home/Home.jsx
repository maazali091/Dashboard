import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import Action from '../../Components/Action/Action'
import Incident from '../../Components/Incident/Incident'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Action />
        <Incident />
    </div>
  )
}

export default Home