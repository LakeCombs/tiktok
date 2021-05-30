import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokdemo.herokuapp.com",
});

export default instance;
