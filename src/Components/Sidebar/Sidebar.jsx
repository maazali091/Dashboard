import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../assets/logo-w.svg'
import { Icon } from '@iconify/react'

function Sidebar({sidebar, setSidebar}) {

const [menu, setMenu] = useState("home");

  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <nav className="menu">
            <ul>
                <div className="bars" onClick={() => setSidebar(prev => prev === false ? true : false)}>
                    <Icon icon='fa:close' >X</Icon>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <li onClick={() => setMenu("dash")} className={menu === 'dash' ? "active" : ""}><a href="#"><Icon icon="mage:dashboard-fill" /> <span>Dashboard</span></a></li>
                <li onClick={() => setMenu("home")} className={menu === 'home' ? "active" : ""}><a href="#"><Icon icon="ion:home" /><span>Home</span></a></li>
                <li onClick={() => setMenu("police")} className={menu === 'police' ? "active" : ""}><a href="#"><Icon  icon="mdi:police-badge" /><span>Police</span></a></li>
                <li onClick={() => setMenu("prison")} className={menu === 'prison' ? "active" : ""}><a href="#"><Icon icon='tabler:building-fortress' /><span>Prison</span></a></li>
                <li onClick={() => setMenu("prosecution")} className={menu === 'prosecution' ? "active" : ""}><a href="#"><Icon icon="mdi:briefcase-variant" /><span>Prosecution</span></a></li>
                <li onClick={() => setMenu("reports")} className={menu === 'reports' ? "active" : ""}><a href="#"><Icon icon="iconoir:reports" /><span>Reports</span></a></li>
                <li onClick={() => setMenu("member")} className={menu === 'member' ? "active" : ""}><a href="#"><Icon icon="mdi:account-group" /><span>Members</span></a></li>
                <li onClick={() => setMenu("user")} className={menu === 'user' ? "active" : ""}><a href="#"><Icon icon="mdi:folder-account" /><span>User Management</span></a></li>
                <li onClick={() => setMenu("role")} className={menu === 'role' ? "active" : ""}><a href="#"><Icon icon="mdi:account-cog" /><span>Role Assignment</span></a></li>
            </ul>
            <a href='#' className='log-out'><Icon icon="hugeicons:logout-04" /><span>Logout</span></a>
        </nav>
    </div>
  )
}

export default Sidebar


// agar ap chahte hi ki variable ki value bloean rakkhe ha  to use asan se bhi changa kia ja sakta h a
// for example setSidebar(prev => !prev)