import { apiBase } from '@api/base';
import { ILookbooks } from '@/interface';


export const getLookbooksList = async () => {
  const { data } = await apiBase.get<ILookbooks>('/lookbooks');

  return data;
};
