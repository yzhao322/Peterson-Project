import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  // getProduces: () => axios.get("/api/produces"),
  removeproduce: (id) => axios.delete("/api/produces" + id),

  postUser: (data) => axios.post("/api/users", data),

  //login post
  postLogin: (data) => axios.post("/api/login", data),

  getProduce: () => axios.get("/api/produces"),
};
