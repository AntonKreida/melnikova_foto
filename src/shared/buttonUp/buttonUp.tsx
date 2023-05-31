import React, { FC } from 'react';

import UndoIcon from '@public/assets/icon/undo.svg';


interface IProps {
  onClick: React.MouseEventHandler;
  text: string;
}


export const ButtonUp: FC<IProps> = ({ onClick, text }) => (
  <button
    className="group absolute right-8 top-0 flex w-fit translate-y-[50%] cursor-pointer items-center gap-1 font-med uppercase text-gray+ transition-all hover:text-gray-400 active:scale-[0.8]"
    type="button"
    onClick={ onClick }
  >
    { text }
    <UndoIcon className="h-[20px] w-[20px] fill-gray+ transition-all group-hover:fill-gray-400" />
  </button>

);
