import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../index.css";
import { useTheme } from "@emotion/react";
import { addCoverEffect, removeCoverEffect } from "../../utils/coverFunction";

const HeaderCards = ({
  content,
  icon,
  subtitle,
  idx,
  containerDecoration,
  index,
  setShowAddIcon,
  showAddIcon,
}) => {
  const theme = useTheme();
  const props = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: { duration: 800 },
  });
  const headerIcons = document.querySelectorAll(".icon");
  const iconAnimation = (idx) => {
    Array.from(headerIcons)[idx]?.classList.add("icon-shake");
  };
  const iconAnimationEnd = () => {
    Array.from(headerIcons)[idx]?.classList.remove("icon-shake");
  };

  return (
    <Paper
      onMouseOver={() => {
        iconAnimation(idx);
        addCoverEffect(index);
        let showAddIconCopy = [...showAddIcon];
        showAddIconCopy.splice(index, 1, false);
        setShowAddIcon(showAddIconCopy);
      }}
      onMouseOut={() => {
        iconAnimationEnd();
        removeCoverEffect(index);
        let showAddIconCopy = [...showAddIcon];
        showAddIconCopy.splice(index, 1, true);
        setShowAddIcon(showAddIconCopy);
      }}
      elevation={4}
      sx={{
        position: "relative",
        mt: 5,
        mx: 4,
        height: "11rem",
        borderRadius: "1rem",
        boxSizing: "border-box",
        px: "2.5rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "all 0.4s ease ",
        overflow: "hidden",
        /*   color: "white",  */
        "&:hover": {
          // backgroundColor: theme.palette.vividBlue.main,
          color: "white",
          transform: "scale(105%)",
        },
      }}
    >
      {containerDecoration}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="button"
            sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
          >
            {content}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "0.9rem" }}>
            {subtitle}
          </Typography>
        </Box>

        <Box className="icon">{icon}</Box>
      </Box>
    </Paper>
  );
};

export default HeaderCards;
