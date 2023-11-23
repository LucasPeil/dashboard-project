import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SaveIcon from "@mui/icons-material/Save";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { Field, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
const SingleAtividade = ({
  rowData,
  openSingleAtividade,
  handleCloseSingleAtividade,
}) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={openSingleAtividade}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseSingleAtividade}
      fullWidth
      maxWidth={"md"}
    >
      <DialogTitle>Nova Atividade Doméstica</DialogTitle>
      <DialogContent dividers>
        <Typography>{rowData.nomeAtividade}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SingleAtividade;
