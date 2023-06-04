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
