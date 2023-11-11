import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import Hamburger from "hamburger-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const VerticalMenu = ({ open, setOpen }) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  const menus = [
    {
      title: "EDUCAÇÃO",
      icon: (
        <SchoolOutlinedIcon
          fontSize="large"
          sx={{ color: open ? "black" : "white" }}
        />
      ),
      path: "/educacao",
    },
    {
      title: "SAÚDE",
      icon: (
        <FitnessCenterOutlinedIcon
          fontSize="large"
          sx={{ color: open ? "black" : "white" }}
        />
      ),
      path: "/saude",
    },
    {
      title: "FINANCEIRO",
      icon: (
        <AttachMoneyIcon
          fontSize="large"
          sx={{ color: open ? "black" : "white" }}
        />
      ),
      path: "/financeiro",
    },
    {
      title: "CASA",
      icon: (
        <MapsHomeWorkOutlinedIcon
          fontSize="large"
          sx={{ color: open ? "black" : "white" }}
        />
      ),
      path: "/casa",
    },
    {
      title: "LAZER",
      icon: (
        <CelebrationOutlinedIcon
          fontSize="large"
          sx={{ color: open ? "black" : "white" }}
        />
      ),
      path: "/lazer",
    },
  ];

  const menuIsOpen = useSpring({
    config: { duration: 300 },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transform: open ? "translateX(0rem)" : "translateX(-10rem)",
    opacity: open ? 1 : 0,
    textAlign: "left",
    color: "black",
    marginLeft: "1rem",
  });
  const verticalNavStyle = useSpring({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    height: "100vh",
    paddingTop: "1rem",
    width: open ? "14rem" : "6rem",
    backgroundColor: open ? "white" : theme.palette.greyBlue.contrastText,
    borderRight: "1px solid #C6C6C6",
  });

  return (
    <Box component={animated.div} style={verticalNavStyle}>
      <IconButton sx={{ ml: 2 }} onClick={() => setOpen(!open)}>
        <Hamburger
          toggled={open}
          toggle={setOpen}
          color={open ? "#000" : "#FFF"}
        />
      </IconButton>
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          component={animated.div}
          style={{
            textDecoration: "none",
            marginTop: "4rem",
            display: "flex",
            width: open ? "14rem" : "6rem",
          }}
          to={menu.path}
        >
          {downSm ? (
            menu.icon
          ) : (
            <Box
              component={motion.div}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                boxSizing: "border-box",
                px: 3,
              }}
            >
              {menu.icon}

              <Typography component={animated.div} style={menuIsOpen}>
                {menu.title}
              </Typography>
            </Box>
          )}
        </NavLink>
      ))}
    </Box>
  );
};

export default VerticalMenu;
