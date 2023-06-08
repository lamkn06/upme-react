import { request } from '../request';

export const getUser = () => {
  return new Promise((resolve, reject) => {
    return request
      .get(`/v1/user`)
      .then(({ data }) => {
        resolve(data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const updateProfile = (id: string, payload: any) => {
  return new Promise((resolve, reject) => {
    return request
      .put(`/v1/profile/${id}`, payload)
      .then(({ data }) => {
        resolve(data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
