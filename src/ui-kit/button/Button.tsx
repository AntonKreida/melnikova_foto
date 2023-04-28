import { FC } from 'react';


interface IProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IProps> = ({ text, onClick }) => (
  <button className="w-fit rounded-full border border-solid border-b-black+ px-[25px] py-[15px] font-book text-sm uppercase text-black+ opacity-70 transition-all hover:bg-grayL active:scale-[0.8] md:px-[15px] md:py-[10px] md:text-xs" type="button" onClick={ onClick }>{ text }</button>
);
