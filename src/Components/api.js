import axios from "axios";

export default axios.create({
  baseURL: "",
  headers: {
    Authorization: `${process.env.MY_PINTEREST_ACCESS_KEY}`,
  },
});
