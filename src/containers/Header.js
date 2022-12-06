import React from 'react'
import "./Header.css"
import { Search, Home, Flag, Store, SubscriptionsOutlined, SupervisedUserCircleOutlined,Add, ForumOutlined, Notifications, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import {useStateValue} from "../context/StateProvider";
const Header = () => {
  const [{user}, dispatch]=useStateValue();
  return (
    <div className='header'>
        <div className='header_left'>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
            alt="no logo" />
          <div className="header_input">
            <Search />
            <input placeholder='Search Facebook' type="text" />
          </div>
        </div>
        <div className='header_middle'>
          <div className='header_option header_option-active'>
            <Home fontSize='large' />
          </div>
          <div className='header_option'>
            <Flag fontSize='large' />
          </div>
          <div className='header_option'>
            <Store fontSize='large' />
          </div>
          <div className='header_option'>
            <SupervisedUserCircleOutlined fontSize='large' />
          </div>
          <div className='header_option'>
            <SubscriptionsOutlined fontSize='large' />
          </div>
        </div>
        <div className='header_right'>
          <div className='header_info'>
            <Avatar src={user.photoURL} size="40" />
            <h4>{user.displayName}</h4>
          </div>
            <IconButton>
             <Add />
            </IconButton>
            <IconButton>
             <ForumOutlined />
            </IconButton>
            <IconButton>
             <Notifications />
            </IconButton>
            <IconButton>
             <ExpandMore />
            </IconButton>
        </div>
    </div>
  )
}

export default Header