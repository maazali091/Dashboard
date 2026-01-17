import React from 'react'
import './Navbar.css'
import admin_logo from '../../assets/32px.png'
import { Icon } from '@iconify/react'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <h1>Kinetic Police Action</h1>
            <div className="profile">
                <div className="notify"><Icon style={{fontSize:"20px"}} icon='heroicons:bell' /> </div>
                <div className="admin">
                    <img src={admin_logo} alt="" />
                    <div className="about">
                        <h4>Fazal Manan</h4>
                        <div className="desc">
                            <p>Officer </p>
                            <Icon icon='heroicons:chevron-down-20-solid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bread-crumbs">
            <div className="bred-wrapper">
                <div className="bred-item">
                    <Icon icon="solar:home-2-linear" />
                    <span>Admin</span>
                </div>
                <span className='separator'>{">"}</span>
                <span className="current-page">Home</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar;