import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  // getProduces: () => axios.get("/api/produces"),

  postUser: (data) => axios.post("/api/users/signup", data),

  //login post
  postLogin: (data) => axios.post("/api/users/login", data),

  // getUser: (_id) => axios.get("/api/user/" + _id),
  getUser: () => axios.get("/api/users"),


  getProduce: () => axios.get("/api/produces"),
};
