import api from "./api-config";

export const padReviews = async (padId) => {
  const resp = await api.get(`pads/${padId}/reviews`);
  return resp.data;
};

export const createReview = async (padId, data) => {
  const resp = await api.post(`pads/${padId}/reviews`, { review: data });
  return resp.data;
};

export const updateReview = async (reviewId, data) => {
  const resp = api.put(`/pads/padId/reviews/${reviewId}`, { review: data });
  return resp.data;
};
export const destroyReview = async (reviewId) => {
  const resp = await api.delete(`/pads/padId/reviews/${reviewId}`);
  return resp.data;
};
