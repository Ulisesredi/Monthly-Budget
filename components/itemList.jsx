import {
  addIncome,
  addExpense,
  removeExpense,
  removeIncome,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { calculateExpenses } from "../helpers";
import { Typography, Paper, createStyles, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Item from "./item";

const useStyles = makeStyles(() =>
  createStyles({
    container: {},
    list: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: ".5rem",
      marginTop: ".5rem",
      boxSizing: "border-box",
    },
  })
);

const ItemList = () => {
  const classes = useStyles();
  const globalState = useSelector((state) => state.calc);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper className={classes.list}>
          <Typography variant="h6">Incomes</Typography>
          {globalState.map((it) => {
            if (it.type === "INCOME") return <Item key={it.id} item={it} />;
          })}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.list}>
          <Typography variant="h6">Expenses</Typography>
          {globalState.map((it) => {
            if (it.type === "EXPENSE") return <Item key={it.id} item={it} />;
          })}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ItemList;
