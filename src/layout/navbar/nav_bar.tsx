import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdjustIcon from '@mui/icons-material/Adjust';
import logo from 'src/assets/logo/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'src/redux/actions/theme.slice.ts';
import { ThemeMode } from 'src/types/theme_type.ts';
import CloseIcon from '@mui/icons-material/Close';

interface NavItem {
  id: number;
  name: string;
  to: string;
}

interface DrawerContentProps {
  handleDrawerToggle: () => void;
}

const drawerWidth = 280;
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

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();

  const mode = useSelector((state: { theme: { mode: ThemeMode } }) => state.theme.mode);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const MemoizedDrawerContent = React.memo(DrawerContent);

  return (
    <AppBar
      sx={{
        height: '6.25rem',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
      }}
    >
      <Toolbar sx={{ height: '100%' }}>
        <Box
          sx={{
            flexGrow: 1,
            ml: { xl: '4.3rem', lg: '3rem', xs: '1rem' },
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1rem',
          }}
        >
          <Link to="/" replace style={{ textDecoration: 'none' }}>
            <Avatar alt="My Logo" src={logo} sx={{ width: '4.375rem', height: '4.375rem' }} />
          </Link>
          <Link to="/" replace style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontSize: '1.375rem',
                fontWeight: '400',
                color: 'primary',
              }}
            >
              Welcome
            </Typography>
          </Link>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-around',
            mr: { xl: '4.3rem', lg: '3rem', xs: '1rem' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: '2rem',
              gap: '1.5rem',
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'Roboto Serif',
                  color: 'primary',
                  fontWeight: '400',
                  flexShrink: '0',
                  cursor: 'pointer',
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                fontFamily: 'Roboto Serif',
                padding: '0.2rem 1.2rem',
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#1f0e0e',
                },
              }}
              onClick={() => dispatch(toggleTheme())}
              startIcon={<AdjustIcon />}
            >
              {mode}
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <MemoizedDrawerContent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </AppBar>
  );
}

export default NavBar;

const DrawerContent: React.FC<DrawerContentProps> = ({ handleDrawerToggle }) => (
  <Box sx={{ padding: '1rem' }}>
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box
      sx={{
        flexGrow: 1,
        ml: { xl: '4.3rem', lg: '3rem', xs: '1rem' },
        display: 'flex',
        alignItems: 'flex-end',
        gap: '1rem',
      }}
    >
      <Avatar alt="My Logo" src={logo} sx={{ width: '3.5rem', height: '3.5rem' }} />
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: '400',
          color: '#166F2A',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        Welcome
      </Typography>
    </Box>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
