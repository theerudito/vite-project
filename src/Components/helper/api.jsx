import axios from "axios";

const url =
  "https://ecovitali.presttoapp.net/Puertto/PostCalidad/Api/api/Login";

export const APIUSER = async ({ data }) => {
  try {
    const res = await axios.get(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
