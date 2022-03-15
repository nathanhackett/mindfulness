import axios from "axios";

export default axios.create({
  Authorization: "https://www.pinterest.com/oauth/",
  Token: "https://api.pinterest.com/v5/oauth/token",
  headers: {
    Authorization: `${process.env.PINTEREST_APP_SECRET}`,
  },
});
