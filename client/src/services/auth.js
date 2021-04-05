import api from "./api-config";

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { authentication: loginData });
  try {
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    return console.log(error);
  }
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users/", { user: registerData });
  try {
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    return console.log(error);
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
