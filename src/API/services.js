import { HTTP } from "./config.js";
const headers = {
  "Content-Type": "application/json"
};

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

export const logoutUser = data =>
  HTTP.post("user/logout", JSON.stringify(data), {
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