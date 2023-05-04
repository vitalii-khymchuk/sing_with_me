import axiosClient from "config/axiosConfig";
import { setBearer, unSetBearer } from "config/axiosConfig";

const signInQuery = async (credentials) => {
  const { data } = await axiosClient.post("/auth/signin", credentials);
  setBearer(data.token);
  return data;
};

const signOutQuery = async () => {
  await axiosClient.post("/auth/logout");
  unSetBearer();
  return Promise.resolve();
};

const getCurrentQuery = async () => {
  const { data } = await axiosClient.get("/auth/current");
  return data;
};

export { signInQuery, signOutQuery, getCurrentQuery };
