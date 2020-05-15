import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  getProduce: (data) => axios.get("/api/produces", data),

  postUser: (data) => axios.post("/api/users", data),
};
