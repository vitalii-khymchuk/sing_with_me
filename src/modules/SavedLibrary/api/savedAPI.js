import axiosClient from "config/axiosConfig";

const getSavedQuery = async () => {
  const { data } = await axiosClient.get("/saved");
  return data;
};

const postSavedQuery = async (item = {}) => {
  const { data } = await axiosClient.post("/saved", item);
  return data;
};

const deleteSavedQuery = async (id) => {
  const { data } = await axiosClient.delete(`/saved/${id}`);
  return data;
};

export { getSavedQuery, postSavedQuery, deleteSavedQuery };
