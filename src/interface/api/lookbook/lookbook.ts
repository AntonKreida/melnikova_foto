import { StaticImageData } from 'next/image';


export interface ILookbooks {
  id: number;
  img: StaticImageData | string;
  title: string;
}
