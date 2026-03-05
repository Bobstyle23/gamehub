import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa447c883f6348e2be6b5fd410a6d9b5",
  },
});
