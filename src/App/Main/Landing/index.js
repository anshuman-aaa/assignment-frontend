import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import withStore from "../../../Components/Unstated/withStore";
import MainStore from "../../../Store/mainStore";
import { Button } from "@material-ui/core";
import { logoutUser } from "../../../API/services";


const Landing = ({ mainStore: { state,init, setActiveContent }, history }) => {
  const classes = useStyles();


  const handleLogout = async () => {
    await logoutUser(state.user);
    localStorage.removeItem("user")

    window.location.reload()
  }
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Button onClick={handleLogout}>Logout</Button>
          </Toolbar>
      </AppBar>
    </div>
  )
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
