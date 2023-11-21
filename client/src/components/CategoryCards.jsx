import { Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import PaletteIcon from "@mui/icons-material/Palette";

const CategoryCards = ({ qty, title, description, bgcolor, icon }) => {
  const theme = useTheme();
  return (
    <Paper
      className="category-banner"
      style={{ "--banner-color": bgcolor }}
      elevation={5}
      sx={{
        display: "flex",
        width: "90%",
        borderRadius: "0.6rem",
        minHeight: "7rem",
        position: "relative",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            position: "absolute",
            zIndex: 1,
            top: "0.7rem",
            color: "white",
          }}
        >
          {title}
          {icon}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 1,
          mt: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          {description}{" "}
        </Typography>
        <Typography
          variant="caption"
          color={"text.secondary"}
          sx={{ position: "absolute", bottom: "0.3rem", right: "0.3rem" }}
        >
          {`${qty} Itens cadastrados`}
        </Typography>
      </Box>
    </Paper>
  );
};

//ARTISTICOS - TRABALHOS MANUAIS
// CULTURAIS
// ATIVIDADE FISICA
// ATIVIDADES EM GRUPO
//  OUTROS
export default CategoryCards;
