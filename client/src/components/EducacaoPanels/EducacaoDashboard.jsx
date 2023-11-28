import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
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
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../../styles/stylesConst";

import { useTheme } from "@emotion/react";
import CategoryCards from "../CategoryCards";
import SearchBar from "../SearchBar";
import { getAllAtividadesEducacao } from "../../features/educacao/educacaoSlice";
const EducacaoDashboard = ({ open }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  ChartJS.register(ArcElement, Tooltip, Legend);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAtividadesEducacao());
  }, []);

  const { atividadesEducacao } = useSelector(
    (state) => state.atividadesEducacao
  );
  const theme = useTheme();

  const tableColumns = [
    {
      name: "Título",
      selector: (row) => row.nomeAtividade,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: (row) => row.descricaoAtividade,
      sortable: true,
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
                DETALHES SOBRE SUA EDUCAÇÃO
              </Typography>

              <SchoolOutlinedIcon
                sx={{ fontSize: "3.1rem", color: "#d8d8d8" }}
              />
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            spacing={10}
            sx={{
              mt: 7,
              mb: 2,
              mx: 2,
              position: "relative",
              zIndex: 10,
              width: "50%",
            }}
          >
            <CategoryCards
              classLabel="category-banner-educacao"
              qty={32}
              title="Cursos"
              description={"Descrição qualquer..."}
              bgcolor={"#648d64"}
              icon={
                <CastForEducationOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              classLabel="category-banner-educacao"
              qty={32}
              title="Livros"
              description={"Descrição qualquer..."}
              bgcolor={"#648d64"}
              icon={
                <MenuBookOutlinedIcon
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
                data={atividadesEducacao}
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
        </Paper>
      </Box>
    </Box>
  );
};

export default EducacaoDashboard;
