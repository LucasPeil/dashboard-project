import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import DataTable from "react-data-table-component";
import { customStyles } from "../../styles/stylesConst";

import { useTheme } from "@emotion/react";
import SearchBar from "../SearchBar";
import CategoryCards from "../CategoryCards";
const LazerDashboard = ({ open, setOpen }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  ChartJS.register(ArcElement, Tooltip, Legend);
  const [imageToDisplay, setImageToDisplay] = useState();
  const theme = useTheme();
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    fetch("../assets/inspiracao1")
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        setImageToDisplay(blob);
      });
  }, []);

  const tableColumns = [
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: (row) => row.descricao,
      sortable: true,
    },
  ];
  const tableData = [
    {
      id: 1,
      title: "Titulo 1",
      descricao: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      title: "Titulo 2",
      descricao: "Lorem ipsum",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // 15 30 20 10
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Box
        sx={{
          transition: "all 0.5s ease",
          width: open ? "calc(100% - 14rem)" : "calc(100% - 6rem)",
        }}
      >
        <Paper
          /* onMouseOver={() => coverEffect()} */
          elevation={6}
          sx={{
            px: 2,
            boxSizing: "border-box",
            width: "calc(100% - 4rem)",
            margin: "2rem auto",
            minHeight: "90vh",
            position: "relative",
          }}
          style={{}}
        >
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"space-between"}
          >
            <Box
              sx={{
                borderBottom: "1px solid #D8D8D8",
                pb: 1,
                pt: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="h2"
                sx={{ fontWeight: 600, color: "#D8D8D8", fontSize: "2.4rem" }}
              >
                DETALHES SOBRE SEU LAZER
              </Typography>

              <CelebrationOutlinedIcon
                sx={{ fontSize: "3.1rem", color: "#d8d8d8" }}
              />
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            spacing={10}
            sx={{ mt: 7, mb: 2, mx: 2, position: "relative", zIndex: 10 }}
          >
            <CategoryCards
              qty={32}
              title="Jogos"
              description={"Descrição qualquer..."}
              bgcolor={"#f4b26a"}
              icon={
                <SportsEsportsOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              qty={32}
              title="Cultura"
              description={"Descrição qualquer..."}
              bgcolor={"#f4b26a"}
              icon={
                <BookOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              qty={32}
              title="Em grupo"
              description={"Descrição qualquer..."}
              bgcolor={"#f4b26a"}
              icon={
                <GroupsOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              qty={32}
              title="Outros"
              description={"Descrição qualquer..."}
              bgcolor={"#f4b26a"}
              icon={
                <CelebrationOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
          </Stack>

          <Grid container>
            <Grid
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
              item
              xs={12}
            >
              <Box
                sx={{
                  boxSizing: "border-box",
                  p: 1,
                  height: "53px",
                  // borderRadius: "0.8rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sx={{ position: "relative", px: 2 }}>
              <DataTable
                columns={tableColumns}
                data={tableData}
                customStyles={customStyles}
                subHeader
                subHeaderComponent={<SearchBar />}
                striped
                pagination
                paginationServer
                paginationComponentOptions={{
                  rowsPerPageText: "Itens por página",
                  rangeSeparatorText: "de",
                  selectAllRowsItem: true,
                  selectAllRowsItemText: "Todos",
                }}
              />
            </Grid>
          </Grid>

          {/*  <Stack
              sx={{
                px: 4,
                my: 3,
                zIndex: 20000000000000,
              }}
              direction={"row"}
              justifyContent={"end"}
            >
                   <Button
                sx={{ display: "flex", justifyContent: "space-around" }}
                onMouseOver={() => setShowArrow(true)}
                onMouseOut={() => setShowArrow(false)}
                className="relatorioButton"
              >
                <Typography className="buttonLabel">
                  Ver Gastos mensais
                </Typography>

                {showArrow && <ArrowRightIcon sx={{ fontSize: "2rem" }} />}
              </Button> 
            </Stack> */}
        </Paper>
      </Box>
    </Box>
  );
};

export default LazerDashboard;
