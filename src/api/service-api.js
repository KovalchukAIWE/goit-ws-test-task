import axios from "axios";

axios.defaults.baseURL = "https://661e9dc716358961cd926361.mockapi.io";

export const getAllAdverts = () => axios.get("/advert/");
