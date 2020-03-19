import React from 'react'
import { useHistory } from "react-router-dom"; 
import { NavBar, Icon } from 'antd-mobile';

export default function CustomNavBar(props) {
    const history = useHistory();

  function onBack() {
    history.push(props.route);
  }
    return (
        <div>
            <NavBar  
                icon={<Icon type="left" />} 
                onLeftClick={onBack}
                className="navBar">{props.title}</NavBar>
        </div>
    )
}
