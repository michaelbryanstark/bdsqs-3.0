import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ display: 'flex', height: '42vh', overflow: 'scroll initial' }}>
      <CDBSidebar toggled textColor="#fa7f67" backgroundColor="none">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="font-face-gm" style={{ color: '#fa7f67' }}>
            home
          </a>
        </CDBSidebarHeader>    
        <CDBSidebarContent className="sidebar-content font-face-gm">
          <CDBSidebarMenu>
            <NavLink exact to="/illustrations" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="pen" style={{ color: '#fa7f67' }}>illustration</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/projects" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="palette" style={{ color: '#fa7f67' }}>projects</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: '#fa7f67' }}>contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            {/* change color of socialicon */}
            <SocialIcon className="nav-item" fgColor="white" bgColor="#fa7f67" url="https://www.instagram.com/mikekingart/?hl=en" target="_blank" /> 
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;