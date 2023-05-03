import axiosClient from "config/axiosConfig";

const getHistoryQuery = async () => {
  const { data } = await axiosClient.get("/history");
  return data;
};

export { getHistoryQuery };
