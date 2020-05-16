import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  // getProduces: () => axios.get("/api/produces"),

  postUser: (data) => axios.post("/api/users", data),

//login post
  postLogin: (data) => axios.post("/api/login", data),
  


getProduce: () => axios.get("/api/produces"),
};
