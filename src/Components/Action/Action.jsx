import React from 'react'
import './Action.css'
import kineticPoliceActions from '../../assets/ActionData'
import { Icon } from '@iconify/react'

function Action() {

    // const [actionMenu]

  return (
    <div className='action'>
        <div className="title">
            <h2>Kinetic Police Action</h2>
        </div>
        <div className="main-cards">
            <div className="cards">
                {kineticPoliceActions.map((item) => {
                    return(
                        <div key={item.id} className="card">
                            <div className="iconBox">
                                <span><Icon icon='fa6-solid:id-card' /></span>
                            </div>
                            <div className="text">{item.title}</div>
                        </div>
                    )
                })};
            </div>
        </div>
    </div>
  )
}

export default Action