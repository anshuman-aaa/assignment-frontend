import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CategoryIcon from "@material-ui/icons/Category";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import { getFacility } from "../../../API/services";
import withStore from "../../../Components/Unstated/withStore";
import MainStore from "../../../Store/mainStore";
const Landing = ({ mainStore: { init, setActiveContent }, history }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getFacility();
      // console.log(result);
      setData(result);
      setLoading(false);
    };
    init();
    fetchData();
  }, []);
  const handlePage = async fac => {
    await setActiveContent(fac);
    history.push("/book");
  };
  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <CategoryIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Category
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.map(fac => (
            <Grid item key={"album" + fac._id} xs={12} sm={6} md={4}>
              <CssBaseline />
              <main onClick={() => handlePage(fac)}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={fac.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {fac.title}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </main>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default withStore([MainStore])(Landing);
