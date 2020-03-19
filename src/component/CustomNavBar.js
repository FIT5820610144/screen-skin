import React from 'react'
import { useHistory } from "react-router-dom"; 
import { NavBar, Icon } from 'antd-mobile';
import CustomIcon from './CustomIcon'

export default function CustomNavBar(props) {
    const history = useHistory();

  function onBack() {
    history.push(props.route);
  }

  function goHome() {
    history.push('/');
  }
    return (
        <div>
            <NavBar  
                icon={<CustomIcon name="back-icon" size="20"/>} 
                onLeftClick={onBack}
                className="navBar"
                rightContent={<div onClick={goHome}><CustomIcon name="home-icon" size="20"/></div>}
                >
                {props.title}
                </NavBar>
        </div>
    )
}
