import axios from "axios";
const amadeus = axios.create({  //api url and headers
  baseURL: "https://test.api.amadeus.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default amadeus;
