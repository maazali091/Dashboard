import React from 'react'
import './Incident.css'
import SpecialIncident from '../../assets/IncidentData'
import { Icon } from '@iconify/react' 

function Incident() {
  return (
    <div className='incident'>
        <div className="title">
            <h2>Special Incidents</h2>
        </div>
        <div className="main-cards">
            <div className="cards">
                {SpecialIncident.map((item) => {
                    return(
                        <div className="card" key={item.id}>
                            <div className="iconBox">
                                <span><Icon icon='fa6-solid:id-card' /></span>
                            </div>
                            <div className="text">{item.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Incident