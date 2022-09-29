import axios from "axios";
const api_url = "https://todoo.5xcamp.us";
const login_path = `${api_url}/users/sign_in`;
const lognout_path = `${api_url}/users/sign_out`;
const signup_path = `${api_url}/users`;
const addtodo_path = `${api_url}/todos`;
const gettodo_path = `${api_url}/todos`;
const deletetodo_path = `${api_url}/todos`;
const toggletodo_path = `${api_url}/todos`;

//登入
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

//註冊
export const signUp = (userData) => {
  return axios({
    method: "post",
    url: signup_path,
    data: userData,
  });
};

//登出
export const logOut = (token) => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "delete",
    url: lognout_path,
  });
};

//新增todo
export const addTodo = (data, token) => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "post",
    url: addtodo_path,
    data: data,
  });
};

//取得todo
export const getTodo = (token) => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "get",
    url: gettodo_path,
  });
};

//刪除todo
export const deleteTodo = (id, token) => {
  return axios({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "delete",
    url: `${deletetodo_path}/${id}`,
  });
};

//toggle todo
export const toggleTodo = (id) => {
  return axios({
    method: "patch",
    url: `${toggletodo_path}/${id}/toggle`,
  });
};
