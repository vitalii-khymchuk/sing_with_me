import axiosClient from "config/axiosConfig";

const searchByRecQuery = async (formData) => {
  const { data } = await axiosClient.post("/recognition/search", formData);
  return data;
};

const searchByTextQuery = async (text) => {
  const { data } = await axiosClient.get("/recognition/search", {
    params: { query: text },
  });
  return data;
};

export { searchByRecQuery, searchByTextQuery };
