import React, {useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../Auth/Register"
import Login from "../Auth/Login"
import Landing from "./Landing"
import PrivateRoute from "../Common/PrivateRoute";
import withStore from "../../Components/Unstated/withStore";
import MainStore from "../../Store/mainStore";

const App = ({mainStore: {init,state: {mainLoading}}}) => {
    useEffect( ()=> {
        init();
    },[])
    return mainLoading ? (
      <div>loading....</div>
    ) : (
      <div className={"App"}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
            <PrivateRoute exact path="/main" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="*" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
};


export default withStore([MainStore])(App);
