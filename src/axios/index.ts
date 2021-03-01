import axios from "axios";

const instance: any = axios.create({
    baseURL: "https://join-tsh-api-staging.herokuapp.com/",
});

export default instance;
