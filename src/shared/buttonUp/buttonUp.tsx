import React, { FC } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';


interface IProps {
  onClick: React.MouseEventHandler;
}


export const ButtonUp: FC<IProps> = ({ onClick }) => (
  <button
    className="group fixed bottom-10 right-8 flex h-12 w-12 translate-y-[50%] cursor-pointer items-center justify-center gap-1 rounded-full border border-solid border-black+ bg-white font-med uppercase text-gray+ shadow-inner transition-all hover:text-gray-400 active:scale-[0.8]"
    type="button"
    onClick={ onClick }
  >
    <ArrowUpIcon className="h-full w-[20px] fill-black+ transition-all group-hover:fill-gray-400" />
  </button>

);
