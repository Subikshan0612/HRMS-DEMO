import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloseIcon from '@mui/icons-material/Close';

const actions = [
  { icon: <PersonAddIcon />, name: 'Employee', page: 'Employee' },
  { icon: <EventIcon />, name: 'Leave', page: 'Leave' },
  { icon: <AccessTimeIcon />, name: 'Attendance', page: 'Attendance' },
  { icon: <WorkIcon />, name: 'Recruitment', page: 'Recruitment Dashboard' },
  { icon: <AttachMoneyIcon />, name: 'Payroll', page: 'Payroll' },
  { icon: <LaptopMacIcon />, name: 'Assets', page: 'Assets' },
  { icon: <LocalOfferIcon />, name: 'Help Desk', page: 'Help Desk' },
  { icon: <BarChartIcon />, name: 'Performance', page: 'Dashboard' },
];

const QuickActionButton = ({ setSelectedPage }) => {
  return (
    <SpeedDial
      ariaLabel="Quick Actions"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
      FabProps={{
        sx: {
          bgcolor: '#f44336', // Red background
          '&:hover': { bgcolor: '#d32f2f' }, // Darker red on hover
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => setSelectedPage(action.page)}
        />
      ))}
    </SpeedDial>
  );
};

export default QuickActionButton;
