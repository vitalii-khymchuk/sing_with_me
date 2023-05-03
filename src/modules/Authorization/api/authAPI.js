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

export { signInQuery, signOutQuery };
