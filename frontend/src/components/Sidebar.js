import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import {
  Dashboard,
  Group,
  FlightTakeoff,
  AccountCircle,
  TimeToLeave,
  ExitToApp,
  Payment,
  TrendingUp,
  Computer,
  HeadsetMic,
  Build,
} from '@mui/icons-material';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ setSelectedPage }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [openSubmenus, setOpenSubmenus] = useState({});

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, subItems: [] },
    { text: 'Recruitment', icon: <Group />, subItems: ['Recruitment Dashboard','Recruitment Pipeline', 'Recruitment Survey','Recruitment Candidate','Interview','Skill Zone','Open Jobs'] },
    { text: 'Onboarding', icon: <FlightTakeoff />, subItems: ['Onboarding View', 'Candidates View'] },
    { text: 'Employee', icon: <AccountCircle />, subItems: ['Directory', 'Profile'] },
    { text: 'Attendance', icon: <TimeToLeave />, subItems: ['View', 'Report'] },
    { text: 'Leave', icon: <ExitToApp />, subItems: ['Apply', 'History'] },
    { text: 'Payroll', icon: <Payment />, subItems: ['Salary Slip', 'Deductions'] },
    { text: 'Performance', icon: <TrendingUp />, subItems: ['Review', 'Goals'] },
    { text: 'Offboarding', icon: <ExitToApp />, subItems: ['Exit Interview', 'Feedback'] },
    { text: 'Assets', icon: <Computer />, subItems: ['Inventory', 'Requests'] },
    { text: 'Help Desk', icon: <HeadsetMic />, subItems: ['Tickets', 'FAQ'] },
    { text: 'Configuration', icon: <Build />, subItems: ['Settings', 'Roles'] },
  ];

  const handleMenuItemClick = (item) => {
    setActiveItem(item.text);
    setSelectedPage(item.text);
    toggleSubmenu(item.text);
  };

  const handleSubItemClick = (subItem) => {
    setActiveItem(subItem);
    setSelectedPage(subItem);
  };

  const toggleSubmenu = (itemText) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  return (
    <div className="sidebar">
      <div className="logo">
        DB4CLOUD
        <div style={{ fontSize: '14px', color: '#c7c7d1' }}>Here Technology Rises Ahead of Sun!!</div>
      </div>
      <List className="menuList">
        {menuItems.map((item) => (
          <div key={item.text}>
            <ListItem
              button
              onClick={() => handleMenuItemClick(item)}
              className={`menuItem ${activeItem === item.text ? 'activeMenuItem' : ''}`}
            >
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            {item.subItems.length > 0 && (
              <Collapse in={openSubmenus[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem}
                      className={`submenuItem ${activeItem === subItem ? 'activeMenuItem' : ''}`}
                      onClick={() => handleSubItemClick(subItem)}
                    >
                      <ListItemText primary={subItem} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
