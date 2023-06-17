import { request } from '../request';

export const getUser = () => {
  return request.get(`/v1/user`);
};

export const updateProfile = (id: string, payload: any) => {
  return request.put(`/v1/profile/${id}`, payload);
};
