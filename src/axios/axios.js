import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://rajukcollege.edutechbd.online', // API base URL
  timeout: 5000, 
});

export default Axios;
