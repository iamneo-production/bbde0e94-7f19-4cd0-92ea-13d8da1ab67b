import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

import { useNavigate } from "react-router-dom";
// const pages = [{ name: "Home", link: "/home" }];
// const settings = [
//   { name: "Login", link: "/login" },
//   { name: "Logout", link: "/" },
// ];


function Navbar() {
  const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const add = () =>{
    navigate("/Login");
  }
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  

  return (
    
    <>
    <div class="sticky">
             {/* <h1> Anytime Fitness </h1> */}
             <button class="button button1">              
              <a href="#About us">About us</a>
              </button>
              <button class="button button1">              
              <a href="#Contact us">Contact us </a>
              </button>
              <button class="button button1">              
              <a href="#Location"> Location </a>
              </button> 
              <button class="button button1">              
              <a href="#Location" onClick={add}> Login </a>
              </button> 

    </div>
    </>
  );
}
export default Navbar;
