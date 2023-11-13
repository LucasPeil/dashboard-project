import { Grid, Box, Typography, Stack, Button, Paper } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import HeaderCards from "../HeaderCards";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataTable from "react-data-table-component";
import { customStyles } from "../../styles/stylesConst";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ModalAtividades from "./ModalAtividades";
import { useTheme } from "@emotion/react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
const VisaoGeralDashboard = ({ open, setOpen }) => {
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

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Tempo dedicado a cada tarefa" },
    },
    maintainAspectRatio: false,
  };

  const labels = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const getData = useMemo(() => {
    let data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: theme.palette.primary.light,
        },
        {
          label: "Dataset 2",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: theme.palette.secondary.light,
        },
        {
          label: "Dataset 3",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: theme.palette.vividRed.light,
        },
      ],
    };

    return data;
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // 15 30 20 10
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <ModalAtividades
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <Box
        sx={{
          height: "100vh",
          transition: "all 0.5s ease",
          width: open ? "calc(100% - 14rem)" : "calc(100% - 6rem)",
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Box onClick={() => handleOpenModal()}>
              <HeaderCards
                idx={0}
                title={"Titulo 1"}
                content={"CASA"}
                icon={<HomeOutlinedIcon sx={{ fontSize: "4rem" }} />}
                subtitle={"Adicionar nova atividade"}
                className_={"icon-container"}
                borderStyle={"7px solid #b387e2"}
                containerDecoration={
                  <Box
                    component={"span"}
                    sx={{
                      position: "absolute",
                      color: "white",
                      backgroundColor: " #b387e2",
                      top: "-3.5rem",
                      left: "-0.8rem",
                      width: "4rem",
                      height: "10rem",
                      transform: "rotate(40deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                      <AddToPhotosIcon />
                    </Box>
                  </Box>
                }
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box onClick={() => handleOpenModal()}>
              <HeaderCards
                idx={1}
                title={"Titulo 2"}
                content={"LAZER"}
                icon={<CelebrationOutlinedIcon sx={{ fontSize: "4rem" }} />}
                subtitle={"Adicionar nova atividade"}
                borderStyle={"7px solid #FDDC88"}
                containerDecoration={
                  <Box
                    component={"span"}
                    sx={{
                      position: "absolute",
                      color: "white",
                      backgroundColor: " #FDDC88",
                      top: "-3.5rem",
                      left: "-0.8rem",
                      width: "4rem",
                      height: "10rem",
                      transform: "rotate(40deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                      <AddToPhotosIcon />
                    </Box>
                  </Box>
                }
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box onClick={() => handleOpenModal()}>
              <HeaderCards
                idx={2}
                title={"Titulo 3"}
                content={"EDUCAÇÃO"}
                icon={<SchoolOutlinedIcon sx={{ fontSize: "4rem" }} />}
                subtitle={"Adicionar nova atividade"}
                borderStyle={"7px solid #FA8282"}
                containerDecoration={
                  <Box
                    component={"span"}
                    sx={{
                      position: "absolute",
                      color: "white",
                      backgroundColor: " #FA8282",
                      top: "-3.5rem",
                      left: "-0.8rem",
                      width: "4rem",
                      height: "10rem",
                      transform: "rotate(40deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                      <AddToPhotosIcon />
                    </Box>
                  </Box>
                }
              />
            </Box>
          </Grid>
        </Grid>

        <Paper
          elevation={6}
          sx={{
            px: 2,
            boxSizing: "border-box",
            width: "calc(100% - 4rem)",
            margin: "2rem auto",
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
                pt: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="h2"
                sx={{ fontWeight: 600, color: "#D8D8D8", fontSize: "2.4rem" }}
              >
                VISÃO GERAL
              </Typography>
              <ContentPasteSearchOutlinedIcon
                sx={{ fontSize: "2.5rem", color: "#d8d8d8" }}
              />
            </Box>
            <Box sx={{ px: 2 }}>
              <Bar options={barOptions} data={getData} height={460} />
            </Box>
            <Stack
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
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default VisaoGeralDashboard;
