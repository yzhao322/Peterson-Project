import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  // getProduces: () => axios.get("/api/produces"),
  removeproduce: (id) => axios.delete("/api/produces" + id),

  postUser: (data) => axios.post("/api/users/signup", data),

  //login post
  postLogin: (data) => axios.post("/api/users/login", data, { withCredentials: true }),

  removeproduce: (data) => axios.put("/api/produces", data),
  // getUser: (_id) => axios.get("/api/user/" + _id),
  getUser: () => axios.get("/api/users"),


  getProduce: () => axios.get("/api/produces"),

  update: () => axios.get("/api/produces"),

  saveOrder: (data) => axios.post("/api/orders", data),

  getOrder : () => axios.get("/api/orders")

};
