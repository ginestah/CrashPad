import api from "./api-config";

export const getAllPads = async () => {
  const resp = await api.get("/pads");
  return resp.data;
};

export const getOnePad = async (id) => {
  const resp = await api.get(`/pads/${id}`);
  return resp.data;
};

export const postPad = async (padData) => {
  const resp = await api.post("/pads", { pad: padData });
  return resp.data;
};

export const putPad = async (id, padData) => {
  const resp = await api.put(`/pads/${id}`, { pad: padData });
  return resp.data;
};

export const destroyPad = async (id) => {
  const resp = await api.delete(`/pads/${id}`);
  return resp;
};

export const destroyPhoto = async (id) => {
  const resp = await api.delete(`/photos/${id}`);
  return resp.data;
};
