import { removeExpense, removeIncome } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { calculateExpenses } from "../helpers";
import { Typography, createStyles, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const useStyles = makeStyles(() =>
  createStyles({
    chip: {
      display: "inline-flex",
      alignContent: "center",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: ".2rem",
    },
    redIcon: {
      color: "#d10213",
      paddingRight: ".2rem",
    },
    greenIcon: {
      color: "#00911f",
      paddingRight: ".2rem",
    },
    deleteButton: {
      color: "#adadad",
      transition: ".3s",
      "&:hover": {
        transition: ".3s",
        color: "#757575",
        cursor: "pointer",
      },
    },
  })
);

const Item = ({ item }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleDeletion = () => {
    item.type === "INCOME"
      ? dispatch(removeIncome({ id: item.id }))
      : dispatch(removeExpense({ id: item.id }));
  };

  if (item.type === "INCOME")
    return (
      <div className={classes.container}>
        <Typography variant="body1" className={classes.chip}>
          <AddCircleIcon className={classes.greenIcon} />
          {`${item.text}  $${item.amount}`}
        </Typography>
        <Tooltip title="Delete item" placement="right-start">
          <DeleteIcon
            onClick={handleDeletion}
            className={classes.deleteButton}
          />
        </Tooltip>
      </div>
    );
  else
    return (
      <div className={classes.container}>
        <Typography variant="body1" className={classes.chip}>
          <RemoveCircleIcon className={classes.redIcon} />
          {`${item.text}  $${item.amount}`}
        </Typography>
        <Tooltip title="Delete item" placement="right-start">
          <DeleteIcon
            onClick={handleDeletion}
            className={classes.deleteButton}
          />
        </Tooltip>
      </div>
    );
};

export default Item;
