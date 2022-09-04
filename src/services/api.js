import axios from "axios";

export const api = axios.create({
  baseURL: "https://almanak-fiap.herokuapp.com/api",
});
