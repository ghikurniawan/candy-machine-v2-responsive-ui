import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { Instagram, Menu as MenuIcon, Twitter } from '@material-ui/icons';
import * as React from 'react';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Gallery', 'Roadmap', 'Story', 'Team'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
      <>
        <AppBar position="fixed" color="transparent" style={{ backdropFilter : "blur(4px)"}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/">
                            <Typography align='center'>Home</Typography>
                        </Link>
                    </MenuItem>
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography align='center'>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to="/">
                    <IconButton aria-label="delete" size="medium">
                        <Avatar alt="CONY LOGO" src="/logo.png" />
                    </IconButton>
                </Link>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Follow on Twitter">
                    <IconButton size="medium">
                        <Twitter fontSize="small"></Twitter>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Follow on Instagram">
                    <IconButton size="medium">
                        <Instagram fontSize='small'></Instagram>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Follow">
                    <IconButton size="medium">
                        <Twitter fontSize='small'></Twitter>
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Follow on Twitter">
                    <Link to="/mint">
                        <Button 
                        variant='outlined'
                        size='medium'
                        color='secondary'
                        >
                            MINT PAGE
                        </Button>
                    </Link>
                </Tooltip>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
        <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                
            </Toolbar>
        </Container>
        </AppBar>
      </>
  );
};
export default NavBar;
