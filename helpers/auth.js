import cookie from "js-cookie";
import { load } from "dotenv/types";
import { response } from "express";
// set coookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      //1day
      expires: 1,
    });
  }
};

// remove cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      //1day
      expires: 1,
    });
  }
};
// get cookie
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};
// set in local storage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// remove from local storage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};
// auth user after login
export const authentication = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};
// signout
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
};

// get user info from local storage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
// update user data in local storage
export const updateUser = (response, next) => {
  if (window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
