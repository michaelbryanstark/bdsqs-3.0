import React from 'react';
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
      <CDBSidebar  className='navbar-toggler' textColor="rgba(0, 171, 252,.8)" backgroundColor="none">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="font-face-gm" style={{ color: 'rgba(0, 171, 252,.8)' }}>
            Home
          </a>
        </CDBSidebarHeader>    
        <CDBSidebarContent className="sidebar-content font-face-gm">
          <CDBSidebarMenu>
            <NavLink exact to="/services" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="laptop" style={{ color: 'rgba(0, 171, 252,.8)' }}>Services</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/certifications" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="certificate" style={{ color: 'rgba(0, 171, 252,.8)' }}>Certifications</CDBSidebarMenuItem>
                </NavLink>
            <NavLink exact to="/company" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="city" style={{ color: 'rgba(0, 171, 252,.8)' }}>Company</CDBSidebarMenuItem>
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
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;