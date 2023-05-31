import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface IGalleryItemProps {
  src: StaticImageData | string;
  text: string;
}

export const GalleryItem: FC<IGalleryItemProps> = ({ src, text }) => (
  <Link className="col-span-2 flex flex-col gap-8" href="/lookbook/1">
    <Image alt="" className="h-full w-full object-cover" src={ src } />
    <div
      className="text-center font-default text-subMax text-black+"
    >
      { text }
    </div>
  </Link>
);
