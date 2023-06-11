import { AxiosError } from 'axios';
import { SWRConfig } from 'swr';
import { GetStaticProps } from 'next';

import { Marking, Main } from '@layout';
import { GalleryItem } from '@/components';
import { useLookbook, SWR_KEYS } from '@/lib';
import { getLookbooksList } from '@/api';
import { ILookbooks, IFallback } from '@/interface';


const LookbookPage = () => {
  const { lookbooks } = useLookbook();

  if (!lookbooks) {
    return null;
  }

  return (
    <Main>
      <Marking grid>
        { lookbooks?.map((lookbook) => (
          <GalleryItem
            key={ lookbook.id }
            src={ lookbook.img }
            title={ lookbook.title }
          />
        )) }
      </Marking>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const lookbooks = await getLookbooksList();

    return {
      props: {
        fallback: {
          [SWR_KEYS.lookbook]: lookbooks
        }
      }
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        props: {
          errorMessage: error.message,
        }
      };
    }
    throw error;
  }
};

export const LookbookPageFallback = (
  { fallback, errorMessage }: IFallback<ILookbooks, string>
) => {
  if (errorMessage) {
    return null;
  }


  return (
    <SWRConfig value={{ fallback }}>
      <LookbookPage />
    </SWRConfig>
  );
};


export default LookbookPageFallback;
