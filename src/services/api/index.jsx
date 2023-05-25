import axios from "axios";

const Api = axios.create({ baseURL: import.meta.env.VITE_APP_API });

export default Api;
