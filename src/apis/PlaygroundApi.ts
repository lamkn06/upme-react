import { PlaygroundType } from '../models/playground.model';
import { request } from '../request';

export const createPlaygroundApi = (payload: PlaygroundType) => {
  return request.post(`api/admin/customer_segments/prioritizing`, payload);
};
