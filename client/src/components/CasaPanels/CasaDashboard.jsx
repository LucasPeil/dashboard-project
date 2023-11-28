import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
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
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../../styles/stylesConst";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import CategoryCards from "../CategoryCards";
import SearchBar from "../SearchBar";
import {
  closeModalCasa,
  getAllAtividadesCasa,
  removeSingleAtividde,
  setOpenModalCasa,
} from "../../features/casa/casaSlice";
import SingleAtividade from "./SingleAtividade";
import FormAtividade from "../FormAtividade";
const CasaDashboard = ({ open, setOpen }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const dispatch = useDispatch();
  const { atividadesCasa, remove, openModalCasa } = useSelector(
    (state) => state.atividadesCasa
  );

  ChartJS.register(ArcElement, Tooltip, Legend);

  const theme = useTheme();

  const tableColumns = [
    {
      name: "Nome da atividade",
      width: "40%",
      selector: (row) => row.nomeAtividade,
      sortable: true,
    },
    {
      name: "Descrição",
      width: "40%",
      selector: (row) => row.descricaoAtividade,
      sortable: true,
    },

    {
      name: "Ações",
      width: "10%",
      selector: (row) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              setSelectedRow(row);
              dispatch(setOpenModalCasa());
            }}
          >
            <EditTwoToneIcon color="success" />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(removeSingleAtividde(row._id));
            }}
          >
            <DeleteTwoToneIcon color="error" />
          </IconButton>
        </Box>
      ),
    },
  ];

  const [openSingleAtividade, setOpenSingleAtividade] = useState(false);
  const handleOpenSingleAtividade = () => setOpenSingleAtividade(true);
  const handleCloseSingleAtividade = () => setOpenSingleAtividade(false);
  const [selectedRow, setSelectedRow] = useState();
  useEffect(() => {
    dispatch(getAllAtividadesCasa());
  }, [remove.isSuccess]);
  const cleanForm = (form) => {
    form.setFieldValue("nomeAtividade", "");
    form.setFieldValue("categoria", "");
    form.setFieldValue("descricaoAtividade", "");
    form.setFieldValue("tempoGasto", "");
    form.setFieldValue("dinheiroGasto", "");
    form.setFieldValue("nivelImportância", "");
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      {/* MODAL EDIÇÃO */}
      <FormAtividade
        openModal={openModalCasa}
        handleCloseModal={closeModalCasa}
        title={"Nova Atividade Doméstica"}
        btnColor="#0c264e"
        btnHoverColor="#000000"
        categoriaItens={["Compras", "Limpeza", "Refeições"]}
        card={"Casa"}
        cleanForm={cleanForm}
        data={selectedRow}
      />

      {/* MODAL SINGLE ATIVIDADE */}
      {openSingleAtividade && (
        <SingleAtividade
          rowData={selectedRow}
          openSingleAtividade={openSingleAtividade}
          handleCloseSingleAtividade={handleCloseSingleAtividade}
        />
      )}

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
                DETALHES SOBRE AS ATIVIDADES DOMÉSTICAS
              </Typography>

              <HomeOutlinedIcon sx={{ fontSize: "3.1rem", color: "#d8d8d8" }} />
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
              width: "70%",
            }}
          >
            <CategoryCards
              classLabel="category-banner-casa"
              qty={32}
              title="Compras"
              description={"Descrição qualquer..."}
              bgcolor={"#0c264e"}
              icon={
                <ShoppingBasketOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              classLabel="category-banner-casa"
              qty={32}
              title="Limpeza"
              description={"Descrição qualquer..."}
              bgcolor={"#0c264e"}
              icon={
                <LocalLaundryServiceOutlinedIcon
                  sx={{
                    position: "absolute",
                    fontSize: "1.2rem",
                    ml: 2,
                  }}
                />
              }
            />
            <CategoryCards
              classLabel="category-banner-casa"
              qty={32}
              title="Refeições"
              description={"Descrição qualquer..."}
              bgcolor={"#0c264e"}
              icon={
                <RamenDiningOutlinedIcon
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
                data={atividadesCasa}
                customStyles={customStyles}
                subHeader
                subHeaderComponent={<SearchBar />}
                striped
                pagination
                paginationServer
                pointerOnHover
                onRowClicked={(row) => {
                  setOpenSingleAtividade(true);
                  setSelectedRow(row);
                }}
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

export default CasaDashboard;
