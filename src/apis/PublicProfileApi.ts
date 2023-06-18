import { request } from '../request';

export const getPublicProfile = (page: string) => {
  return request.get(`/v1/profile/public/${page}`);
};
