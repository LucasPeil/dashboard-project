import { faker } from "@faker-js/faker";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  MenuItem,
} from "@mui/material";
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
import React, { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import "../../index.css";
import HeaderCards from "../HeaderCards";
import { toast } from "react-toastify";
import { useTheme } from "@emotion/react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import FormAtividade from "../FormAtividade";
import {
  setOpenModalCasa,
  closeModalCasa,
  resetRegisterCasa,
} from "../../features/casa/casaSlice";
import {
  setOpenModalLazer,
  closeModalLazer,
  resetRegisterLazer,
} from "../../features/lazer/lazerSlice";
import {
  setOpenModalEducacao,
  closeModalEducacao,
  resetRegisterEducacao,
} from "../../features/educacao/educacaoSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotalDinheiroGasto } from "../../features/visaoGeral/visaoGeralSlice";
import dayjs from "dayjs";
import MotionDiv from "../../MotionDiv";
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
  const theme = useTheme();
  const dispatch = useDispatch();
  const { openModalCasa, register } = useSelector(
    (state) => state.atividadesCasa
  );
  const { openModalLazer } = useSelector((state) => state.atividadesLazer);
  const { openModalEducacao } = useSelector(
    (state) => state.atividadesEducacao
  );
  const { dinheiroGasto } = useSelector((state) => state.dinheiroGasto);
  const { register: registerCasa, update: updateCasa } = useSelector(
    (state) => state.atividadesCasa
  );
  const { register: registerLazer, update: updateLazer } = useSelector(
    (state) => state.atividadesLazer
  );
  const { register: registerEducacao, update: updateEducacao } = useSelector(
    (state) => state.atividadesEducacao
  );
  const getMonthTotalAmountCasa = (month) => {
    const dinheiroGastoMes = dinheiroGasto?.dinheiroCasaMes?.find(
      (item) => item._id.mes == month
    )?.totalAmount;

    if (dinheiroGastoMes) {
      return dinheiroGastoMes;
    } else {
      return 0;
    }
  };
  const getMonthTotalAmountLazer = (month) => {
    const dinheiroGastoMes = dinheiroGasto?.dinheiroLazerMes?.find(
      (item) => item._id.mes == month
    )?.totalAmount;

    if (dinheiroGastoMes) {
      return dinheiroGastoMes;
    } else {
      return 0;
    }
  };
  const getMonthTotalAmountEducacao = (month) => {
    const dinheiroGastoMes = dinheiroGasto?.dinheiroEducacaoMes?.find(
      (item) => item._id.mes == month
    )?.totalAmount;

    if (dinheiroGastoMes) {
      return dinheiroGastoMes;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    dispatch(getTotalDinheiroGasto());
  }, [
    registerCasa.isSuccess,
    registerLazer.isSuccess,
    registerEducacao.isSuccess,
  ]);

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Tempo dedicado" },
    },
    maintainAspectRatio: false,
    redraw: true,
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

  const [data, setData] = useState();
  useEffect(() => {
    let dataVariable = {
      labels,
      datasets: [
        {
          label: "CASA",
          data: [
            getMonthTotalAmountCasa("January"),
            getMonthTotalAmountCasa("February"),
            getMonthTotalAmountCasa("March"),
            getMonthTotalAmountCasa("April"),
            getMonthTotalAmountCasa("May"),
            getMonthTotalAmountCasa("June"),
            getMonthTotalAmountCasa("July"),
            getMonthTotalAmountCasa("August"),
            getMonthTotalAmountCasa("September"),
            getMonthTotalAmountCasa("October"),
            getMonthTotalAmountCasa("November"),
            getMonthTotalAmountCasa("December"),
          ],
          backgroundColor: "#0c264e",
        },
        {
          label: "LAZER",
          data: [
            getMonthTotalAmountLazer("January"),
            getMonthTotalAmountLazer("February"),
            getMonthTotalAmountLazer("March"),
            getMonthTotalAmountLazer("April"),
            getMonthTotalAmountLazer("May"),
            getMonthTotalAmountLazer("June"),
            getMonthTotalAmountLazer("July"),
            getMonthTotalAmountLazer("August"),
            getMonthTotalAmountLazer("September"),
            getMonthTotalAmountLazer("October"),
            getMonthTotalAmountLazer("November"),
            getMonthTotalAmountLazer("December"),
          ],
          backgroundColor: "#f4b26a",
        },
        {
          label: "EDUCAÇÃO",
          data: [
            getMonthTotalAmountEducacao("January"),
            getMonthTotalAmountEducacao("February"),
            getMonthTotalAmountEducacao("March"),
            getMonthTotalAmountEducacao("April"),
            getMonthTotalAmountEducacao("May"),
            getMonthTotalAmountEducacao("June"),
            getMonthTotalAmountEducacao("July"),
            getMonthTotalAmountEducacao("August"),
            getMonthTotalAmountEducacao("September"),
            getMonthTotalAmountEducacao("October"),
            getMonthTotalAmountEducacao("November"),
            getMonthTotalAmountEducacao("December"),
          ],
          backgroundColor: "#648d64",
        },
      ],
    };

    setData(dataVariable);

    return () => {
      dispatch(resetRegisterEducacao());
      dispatch(resetRegisterCasa());
      dispatch(resetRegisterLazer());
    };
  }, [
    dinheiroGasto,
    registerCasa.isSuccess,
    registerLazer.isSuccess,
    registerEducacao.isSuccess,
  ]);
  /*   console.log(data?.datasets[1].data); */

  const cleanForm = (form) => {
    form.setFieldValue("nomeAtividade", "");
    form.setFieldValue("categoria", "");
    form.setFieldValue("descricaoAtividade", "");
    form.setFieldValue("tempoGasto", "");
    form.setFieldValue("dinheiroGasto", "");
    form.setFieldValue("nivelImportancia", "");
  };

  const [showAddIcon, setShowAddIcon] = useState([true, true, true]);

  useEffect(() => {
    if (register.isSuccess) {
      toast.success(register.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }, [register.isSuccess]);
  // 15 30 20 10

  return (
    <MotionDiv>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <FormAtividade
          openModal={openModalCasa}
          handleCloseModal={closeModalCasa}
          title={"Nova Atividade Doméstica"}
          btnColor="#0c264e"
          btnHoverColor="#000000"
          categoriaItens={["Compras", "Limpeza", "Refeições"]}
          card={"Casa"}
          cleanForm={cleanForm}
        />
        <FormAtividade
          openModal={openModalLazer}
          handleCloseModal={closeModalLazer}
          title={"Nova Atividade de Lazer"}
          btnColor="#f4b26a"
          btnHoverColor="#E39F54"
          categoriaItens={["Jogos", "Cultura", "Em grupo", "Outros"]}
          card={"Lazer"}
          cleanForm={cleanForm}
        />
        <FormAtividade
          openModal={openModalEducacao}
          handleCloseModal={closeModalEducacao}
          title={"Nova Atividade de Educação"}
          btnColor="#648d64"
          btnHoverColor="#4E7A4E"
          categoriaItens={["Cursos", "Livros"]}
          card={"Educação"}
          cleanForm={cleanForm}
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
              <Box onClick={() => dispatch(setOpenModalCasa())}>
                <HeaderCards
                  idx={0}
                  content={"CASA"}
                  icon={<HomeOutlinedIcon sx={{ fontSize: "4rem" }} />}
                  subtitle={"Adicionar nova atividade"}
                  className_={"icon-container"}
                  index="0"
                  setShowAddIcon={setShowAddIcon}
                  showAddIcon={showAddIcon}
                  containerDecoration={
                    <Box
                      id="0"
                      component={"span"}
                      sx={{
                        position: "absolute",
                        color: "white",
                        backgroundColor: " #0c264e",
                        top: "-3.5rem",
                        left: "-0.8rem",
                        width: "4rem",
                        height: "10rem",
                        transform: "rotate(40deg)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        transition:
                          " width 0.4s ease, height 0.4s ease, top 0.5s ease , left 0.5s ease ",
                      }}
                    >
                      <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                        {showAddIcon[0] && <AddToPhotosIcon />}
                      </Box>
                    </Box>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box onClick={() => dispatch(setOpenModalLazer())}>
                <HeaderCards
                  idx={1}
                  content={"LAZER"}
                  icon={<CelebrationOutlinedIcon sx={{ fontSize: "4rem" }} />}
                  subtitle={"Adicionar nova atividade"}
                  index="1"
                  setShowAddIcon={setShowAddIcon}
                  showAddIcon={showAddIcon}
                  containerDecoration={
                    <Box
                      id="1"
                      component={"span"}
                      sx={{
                        position: "absolute",
                        color: "white",
                        backgroundColor: "#f4b26a",
                        borderRadius: "50%",
                        top: "-3.5rem",
                        left: "-0.8rem",
                        width: "4rem",
                        height: "10rem",
                        transform: "rotate(40deg)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition:
                          " width 0.4s ease, height 0.4s ease, top 0.5s ease , left 0.5s ease ",
                      }}
                    >
                      <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                        {showAddIcon[1] && <AddToPhotosIcon />}
                      </Box>
                    </Box>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box onClick={() => dispatch(setOpenModalEducacao())}>
                <HeaderCards
                  idx={2}
                  content={"EDUCAÇÃO"}
                  icon={<SchoolOutlinedIcon sx={{ fontSize: "4rem" }} />}
                  subtitle={"Adicionar nova atividade"}
                  index="2"
                  setShowAddIcon={setShowAddIcon}
                  showAddIcon={showAddIcon}
                  containerDecoration={
                    <Box
                      id="2"
                      component={"span"}
                      sx={{
                        position: "absolute",
                        color: "white",
                        backgroundColor: "#648d64",
                        borderRadius: "50%",
                        top: "-3.5rem",
                        left: "-0.8rem",
                        width: "4rem",
                        height: "10rem",
                        transform: "rotate(40deg)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition:
                          " width 0.4s ease, height 0.4s ease, top 0.5s ease , left 0.5s ease ",
                      }}
                    >
                      <Box sx={{ transform: "rotate(320deg)", ml: 1 }}>
                        {showAddIcon[2] && <AddToPhotosIcon />}
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
              minHeight: "70vh",
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
              {data && (
                <Box sx={{ px: 2 }}>
                  <Bar
                    options={barOptions}
                    data={data}
                    height={460}
                    redraw={
                      registerLazer.isSuccess ||
                      registerEducacao.isSuccess ||
                      registerCasa.isSuccess
                        ? true
                        : false
                    }
                  />
                </Box>
              )}
              {/*  <Stack
              sx={{
                px: 4,
                my: 3,
                mb: 5,
              }}
              direction={"row"}
              justifyContent={"end"}
            >
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
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
            </Stack>
          </Paper>
        </Box>
      </Box>
    </MotionDiv>
  );
};

export default VisaoGeralDashboard;
