import { apiBase } from '@api/base';


export const getLookbooksList = async () => {
  const { data } = await apiBase.get('/lookbook');

  return data;
};
