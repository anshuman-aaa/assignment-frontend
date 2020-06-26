import { HTTP } from "./config.js";
const headers = {
  "Content-Type": "application/json"
};

export const getFacility = () =>
HTTP.get("api/fac")
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return;
    });

export const loginUser = data =>
  HTTP.post("users/login", JSON.stringify(data), {
    headers: headers
  })
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }else {
          return "error";
        }
      })
    .catch(error => {
      return "error";
    });

export const registerUser = data =>
  HTTP.post("users/register", JSON.stringify(data), {
    headers: headers
  })
    .then(res => {
      if (res.status === 201) {
        return res.data;
      }else {
          return "error";
        }
    })
    .catch(error => {
      return "error";
    });

export const bookUser = data =>
  HTTP.post("api/book", JSON.stringify(data), {
    headers: headers
  })
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }else {
          return "error";
        }
    })
    .catch(error => {
      return "error";
    });