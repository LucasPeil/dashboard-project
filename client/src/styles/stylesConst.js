export const customStyles = {
  table: {
    style: {
      overflow: "auto",
      height: "40vh",
    },
  },
  rows: {
    style: {
      fontSize: "16px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  subHeader: {
    style: {
      minHeight: "52px",
      padding: "0px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "18px",
      fontWeight: "bold",
      borderBottom: "1px solid #DEDEDE",
    },
  },

  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
  pagination: {
    style: {
      position: "relative",
      bottom: 0,
      left: 0,
    },
  },
};
