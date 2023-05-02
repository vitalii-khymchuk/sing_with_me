import axiosClient from "config/axiosConfig";

const signInQuery = async (credentials) => {
  const { data } = await axiosClient.post("/auth/signin", credentials);
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data;
};

const signOutQuery = async () => {
  await axiosClient.post("/auth/logout");
  axiosClient.defaults.headers.common["Authorization"] = "";
  return Promise.resolve();
};

export { signInQuery, signOutQuery };
