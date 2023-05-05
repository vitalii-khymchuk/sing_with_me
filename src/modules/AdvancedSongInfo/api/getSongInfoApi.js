import axiosClient from "config/axiosConfig";

const getInfoQuery = async (id) => {
  const { data } = await axiosClient.get(`/recognition/getinfo/${id}`);
  return data;
};

export { getInfoQuery };
