import { Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const CategoryCards = ({ qty, title, description }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        width: "90%",
        borderRadius: "1rem",
        overflow: "hidden",
        minHeight: "7rem",
      }}
    >
      <Box
        sx={{
          width: "40%",
          backgroundColor: "#7D8DD0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          {qty}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          Itens Cadastrados
        </Typography>
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 1,
        }}
      >
        <Typography
          variant="button"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {title}{" "}
        </Typography>
        <Typography variant="caption" color={"text.secondary"}>
          {description}{" "}
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
