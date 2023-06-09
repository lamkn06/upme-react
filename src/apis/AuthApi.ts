import { request } from '../request';

interface SocialPayload {
  email: string;
  fullName: string;
  displayName: string;
  profilePicture: string;
}

export const loginByEmail = (email: string, password: string) => {
  return request.post(`/v1/user/login`, {
    email,
    password,
  });
};

export const registerByEmail = (email: string, password: string) => {
  return request.post(`/v1/user`, {
    email,
    password,
  });
};

export const loginByGoogle = (payload: SocialPayload) => {
  return request.post(`/v1/user/login/oauth/google`, payload);
};

export const loginByFacebook = (payload: SocialPayload) => {
  return request.post(`/v1/user/login/oauth/facebook`, payload);
};
