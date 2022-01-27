import Calculator from "../components/calculator";
import { Container, createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Head } from "next/head";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Calculator />
    </Container>
  );
}
