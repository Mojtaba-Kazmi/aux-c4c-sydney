import * as React from "react";
import Image from "next/image";
import logo from "../public/assets/aux-cash-for-cars-sydney.svg";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Drawer,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Our Services",
  "Our Blog",
  "FAQS",
  "About Us",
  "Contact Us",
];

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.header.main, // using primary color for background
}));

const NavListItemText = styled(ListItemText)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HeaderAppBar>
        <Container fixed>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuIcon style={{ color: "#1b5e20" }} />
              </IconButton>
            </Box>

            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ my: 2, color: "#212121", display: "block" }}
                >
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <NavListItemText secondary={item} />
                  </ListItemButton>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </HeaderAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
