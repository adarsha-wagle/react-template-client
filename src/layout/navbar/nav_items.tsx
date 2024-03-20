import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

interface NavItem {
  id: number;
  name: string;
  to: string;
}
const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Home',
    to: '/home',
  },
  {
    id: 2,
    name: 'About',
    to: '/about',
  },
  {
    id: 3,
    name: 'Service',
    to: '/service',
  },
];

function NavItems() {
  return (
    <>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

export default React.memo(NavItems);
