import { request } from '../request';

export const getProfile = () => {
  return request.get(`/v1/profile`);
};

export const updateProfile = (id: string, payload: any) => {
  return request.put(`/v1/profile/${id}`, payload);
};
