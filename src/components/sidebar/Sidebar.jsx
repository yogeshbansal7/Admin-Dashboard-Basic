import React from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'; import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className='logo'> YBansal </span>
        </Link>

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li> <DashboardOutlinedIcon className='icon' /> <span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li> <Person2OutlinedIcon className='icon' /> <span>Users</span></li>
          </Link>
          <Link to="/products" style={{textDecoration:'none'}}>
          <li> <StoreOutlinedIcon className='icon' /> <span>Products</span></li>
          </Link>
          <li> <StorefrontOutlinedIcon className='icon' /> <span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className='icon' /><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><QueryStatsOutlinedIcon className='icon' /><span>Stats</span></li>
          <li><NotificationsActiveOutlinedIcon className='icon' /><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><DnsOutlinedIcon className='icon' /><span>System Health</span></li>
          <li><PinOutlinedIcon className='icon' /><span>Logs</span></li>
          <li><SettingsOutlinedIcon className='icon' /><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountBoxOutlinedIcon className='icon' /><span>Profile</span></li>
          <li><ExitToAppOutlinedIcon className='icon' /><span>Logout</span></li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
