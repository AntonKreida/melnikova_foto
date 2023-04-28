import { FC } from 'react';

import { Sidebar } from '@layout/sidebar';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}


export const Main: FC<IProps> = ({ children }) => (
  <div className="h-screen w-screen">
    <Sidebar />
    { children }
  </div>
);
