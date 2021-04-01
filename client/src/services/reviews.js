import api from "./api-config";

export const padReviews = async (padId) => {
  const resp = await api.get(`pads/${padId}/reviews`);
  return resp.data;
};

export const createReview = async (userId, padId, reviewData) => {
  data.user_id = userId;
  data.pad_id = padId;
  const resp = await api.post(`pads${padId}/reviews`, { review: reviewData });
  return resp.data;
};

export const updateReview = async (reviewId, data) => {
  const resp = api.put(`/pads/padId/reviews/${reviewId}`, { review: data });
};
export const destroyReview = async (reviewId) => {
  const resp = await api.delete(`/pads/padId/reviews/${reviewId}`);
};
