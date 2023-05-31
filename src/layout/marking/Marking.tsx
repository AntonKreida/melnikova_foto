import { FC } from 'react';


interface IMarkingProps {
  children: JSX.Element | JSX.Element[] | string;
  grid?: boolean;
}


export const Marking: FC<IMarkingProps> = ({ children, grid }) => (
  <div className={ `h-full w-full pr-[60px] ${grid ? 'grid grid-cols-6 gap-14 [&>*:nth-child(4)]:col-span-3 [&>*:nth-child(5)]:col-span-3' : 'flex flex-col'}` }>
    { children }
  </div>
);
