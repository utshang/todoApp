import axios from "axios";
const api_url = "https://todoo.5xcamp.us";
const login_path = `${api_url}/users/sign_in`;
const lognout_path = `${api_url}/users/sign_out`;
const signup_path = `${api_url}/users`;
// const todo_path = `${api_url}/todos`;
// const del_path = `${api_url}/todos`;

export const signIn = (data) => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    url: login_path,
    data: data,
  });
};

export const signUp = (userData) => {
  return axios({
    method: "post",
    url: signup_path,
    data: userData,
  });
};

export const logOut = () => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "delete",
    url: lognout_path,
  });
};
