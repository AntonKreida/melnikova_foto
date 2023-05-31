import { Marking, Main } from '@layout';
import { GalleryItem } from '@/components';
import Img from '@public/assets/images/itm.jpg';


const LookbookPage = () => (
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

export default LookbookPage;
