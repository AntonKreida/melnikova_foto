import { AxiosError } from 'axios';
import { SWRConfig } from 'swr';
import { GetStaticProps } from 'next';

import { Marking, Main } from '@layout';
import { GalleryItem } from '@/components';
import Img from '@public/assets/images/itm.jpg';
import { useLookbook, SWR_KEYS } from '@/lib';
import { getLookbooksList } from '@/api';
import { ILookbooks, IFallback } from '@/interface';


const LookbookPage = () => {
  const { lookbooks } = useLookbook();

  console.log(lookbooks);


  return (
    <Main>
      <Marking grid>
        <GalleryItem src={ Img } text="Алена" />
        <GalleryItem src={ Img } text="Алена" />
        <GalleryItem src={ Img } text="Алена" />
        <GalleryItem src={ Img } text="Алена" />
        <GalleryItem src={ Img } text="Алена" />
      </Marking>
    </Main>
  );
};

export const LookbookPageFallback = (
  { fallback }: IFallback<ILookbooks>
) => (
  <SWRConfig value={{ fallback }}>
    <LookbookPage />
  </SWRConfig>
);

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

export default LookbookPageFallback;
