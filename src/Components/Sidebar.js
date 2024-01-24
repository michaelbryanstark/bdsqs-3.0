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
    <div style={{ display: 'flex', height: '50vh', overflow: 'scroll initial' }}>
      <CDBSidebar toggled textColor="rgba(0, 171, 252,.8)" backgroundColor="none">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="font-face-gm" style={{ color: 'rgba(0, 171, 252,.8)' }}>
            home
          </a>
        </CDBSidebarHeader>    
        <CDBSidebarContent className="sidebar-content font-face-gm">
          <CDBSidebarMenu>
            <NavLink exact to="/services" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="pen" style={{ color: 'rgba(0, 171, 252,.8)' }}>Services</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/certifications" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="palette" style={{ color: 'rgba(0, 171, 252,.8)' }}>Certifications</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/company" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: 'rgba(0, 171, 252,.8)' }}>Company</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: 'rgba(0, 171, 252,.8)' }}>Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              
            }}
          >
            {/* change color of socialicon */}
            <SocialIcon className="nav-item" fgColor="white" bgColor="rgba(0, 171, 252,.8)" url="https://www.linkedin.com/in/bdstark2000/" target="_blank" /> 
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;