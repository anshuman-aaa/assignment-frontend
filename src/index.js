import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./App/Main/App";
import { linkedStores } from "./Helpers/Stores/linkedStores";
import * as serviceWorker from "./serviceWorker";
import "./Styles/index.sass";


const stores = linkedStores();


ReactDOM.render(
        <Provider inject={stores}>
            <App />
        </Provider>
    ,
    document.getElementById("root")
);

serviceWorker.unregister();

