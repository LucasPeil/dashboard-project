import {
  Dialog,
  Box,
  Typography,
  Divider,
  Zoom,
  Slide,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  Field,
  Form,
  FormikProvider,
  getIn,
  Formik,
  FieldArray,
  useFormik,
} from "formik";
import { setNewAtividadeCasa } from "../../features/casa/casaSlice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const ModalAtividades = ({ openModal, handleCloseModal, data }) => {
  const dispatch = useDispatch();
  const ValidationSchema = Yup.object({
    nomeAtividade: Yup.string()
      .trim()
      .required("Nome da Atividade é obrigatório"),
    tempoGasto: Yup.number()
      .required("Tempo gasto para exercer a atividade é obrigatório")
      .positive()
      .integer()
      .min(1),
    descricaoAtividade: Yup.string()
      .nullable()
      .test(
        "string-length",
        "Máximo de 1000 caracteres",
        (value) => value?.length <= 1000
      ),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nomeAtividade: data?.nomeAtividade || "",
      tempoGasto: data?.tempoGasto || "",
      dinheiroGasto: data?.dinheiroGasto || data,
      descricaoAtividade: data?.descricaoAtividade || "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      dispatch(setNewAtividadeCasa(values));
    },
  });

  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      fullWidth
      maxWidth={"md"}
    >
      <DialogTitle>Nova Atividade Doméstica</DialogTitle>
      <DialogContent dividers>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Field
              {...formik.getFieldProps("nomeAtividade")}
              as={TextField}
              type="text"
              label="Nome da atividade"
              variant="standard"
              fullWidth
            />
            <Field
              {...formik.getFieldProps("descricaoAtividade")}
              as={TextField}
              multiline
              type="text"
              label="Descrição da atividade"
              minRows={7}
              maxRows={12}
              variant="filled"
              fullWidth
              style={{ marginTop: 30, marginBottom: 30 }}
            />
            <Field
              {...formik.getFieldProps("dinheiroGasto")}
              as={TextField}
              type="number"
              startAdorments={
                <InputAdornment position="start">$</InputAdornment>
              }
              InputProps={{
                inputProps: { min: 0 },
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              label="Dinheiro gasto nesta tarefa"
              variant="standard"
              fullWidth
              helperText="* Em Reais"
              style={{ marginTop: 30, marginBottom: 30 }}
            />
            <Field
              {...formik.getFieldProps("tempoGasto")}
              as={TextField}
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              label="Tempo a ser dedicado a esta tarefa"
              variant="standard"
              fullWidth
              helperText="* Em minutos"
              style={{ marginTop: 30, marginBottom: 30 }}
            />

            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 5,
              }}
            >
              <IconButton
                type="submit"
                sx={{
                  backgroundColor: "#FFB703",
                  borderRadius: 0,
                  color: "white",
                  width: "45%",
                  transition: "all 0.4s ease",
                  "&:hover": { backgroundColor: "#FB8500" },
                  gap: 2,
                }}
              >
                <Typography variant="button">Salvar</Typography>
                <SaveIcon />
              </IconButton>

              <IconButton
                onClick={() => handleCloseModal()}
                sx={{
                  backgroundColor: "#FFB703",
                  borderRadius: 0,
                  color: "white",
                  width: "45%",
                  transition: "all 0.4s ease",
                  "&:hover": { backgroundColor: "#FB8500" },
                  gap: 2,
                }}
              >
                <Typography variant="button">Cancelar</Typography>
                <KeyboardReturnIcon />
              </IconButton>
            </DialogActions>
          </Form>
        </FormikProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAtividades;
