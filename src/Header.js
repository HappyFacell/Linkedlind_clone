import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Headers() {
  return (
    <div className='header'>
        <div className='header_left'>
          <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqFkN1PtEbLn-bKzlDnpRKRRu37wTxcF_3pATE2oFSg&s' 
          alt=''/>
          <div className='header_search'>
            <SearchIcon/>
            <input type='text'/>
          </div>
        </div>
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://media.licdn.com/dms/image/D5635AQGkvnEgPUbmdA/profile-framedphoto-shrink_100_100/0/1705168599043?e=1716832800&v=beta&t=AiXo85eHQ6Npv9LbBqOKFR_nqcFK4P1yYMH4XlTPxoQ" title="Me"/>
        </div>

    </div>
  )
}

export default Headers