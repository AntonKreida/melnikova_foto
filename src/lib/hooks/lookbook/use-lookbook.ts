import useSwr from 'swr';

import { SWR_KEYS } from '@/lib/constants';
import { getLookbooksList } from '@/api';


export const useLookbook = () => {
  const { data } = useSwr(SWR_KEYS.lookbook, getLookbooksList);

  return {
    lookbooks: data
  };
};
