import {
  addIncome,
  addExpense,
  removeExpense,
  removeIncome,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { calculateExpenses } from "../helpers";
import {
  Typography,
  Paper,
  createStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemList from "./itemList";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "100%",
      padding: "2rem",
      "& label.Mui-focused": {
        color: "#edc100",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#edc100",
        },
        "&:hover fieldset": {
          borderColor: "#edc100",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ff0d6e",
        },
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      "& .MuiButton-root": {
        background: "#ffd000",
        transition: ".3s",
        "&:hover": {
          transition: ".3s",
          background: "#ff0d6e",
        },
      },
    },
  })
);

const Calculator = () => {
  const classes = useStyles();
  const globalState = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("EXPENSE");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(calculateExpenses(globalState));
  }, [globalState]);

  const handleDeletion = (item) => {
    item.type === "INCOME"
      ? dispatch(removeIncome({ id: item.id }))
      : dispatch(removeExpense({ id: item.id }));
    setTotal(calculateExpenses(globalState));
  };

  const handleSubmit = () => {
    setTotal(calculateExpenses(globalState));
    if (type === "EXPENSE") {
      dispatch(addExpense({ amount: parseFloat(amount), text: description }));
    } else {
      dispatch(addIncome({ amount: parseFloat(amount), text: description }));
    }
  };

  return (
    <Paper className={classes.container}>
      <Typography variant="h2" textAlign="center" fontWeight="bold">
        Monthly Budget
      </Typography>
      <Typography variant="h1" textAlign="center">
        {total}
      </Typography>

      <FormControl fullWidth>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                id="description"
                label="Amount"
                required
                type="number"
                variant="outlined"
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="type-of-income">Type</InputLabel>
              <Select
                labelId="type-of-income"
                id="type-of-income"
                value={type}
                label="Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="EXPENSE">Expense</MenuItem>
                <MenuItem value="INCOME">Income</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Tooltip title="Add income or expense" placement="right-end">
              <Button variant="contained" onClick={handleSubmit}>
                Add Income
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </FormControl>

      <ItemList />
    </Paper>
  );
};

export default Calculator;
