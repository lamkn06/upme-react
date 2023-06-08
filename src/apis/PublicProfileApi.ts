import { request } from '../request';

export const getPublicProfile = (page: string) => {
  return new Promise((resolve, reject) => {
    return request
      .get(`/v1/profile/public/${page}`)
      .then(({ data }) => {
        resolve(data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
