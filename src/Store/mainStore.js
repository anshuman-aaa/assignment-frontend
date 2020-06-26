import { Container } from "unstated";

const initialstate = () => ({
    loading: true,
    data: null,
    user: null,
    mainLoading: true
});

export default class MainStore extends Container {
    state = initialstate();
    name = "MainStore";
    init = async () => {
        const userAllData = JSON.parse(localStorage.getItem("user"));
        await this.setState({user:userAllData,mainLoading:false})
    };
    setActiveContent = async (data) => {
        console.log("fac",data)
        await this.setState({
            data,
            loading: false
        });
    };
    bindStore = (store) => {
        this.linkedStores[store.name] = store;
    };
}
