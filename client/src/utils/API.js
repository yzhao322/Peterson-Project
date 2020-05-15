import axios from "axios";

export default {
  postProduce: (data) => axios.post("/api/produces", data),
  postUser: (data) => axios.post("/api/users", data),
  getProduce: () => axios.get("/api/produces")
};
