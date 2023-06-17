import { request } from '../request';

export const getUser = () => {
  return request.get(`/v1/user`);
};

export const updateAvatar = (avatar: any) => {
  const formData = new FormData();
  formData.append('profilePicture', avatar);
  return request.post(`/v1/profile/picture`, formData);
};
