import { FC } from 'react';

import { Sidebar } from '@layout/sidebar';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}


export const Container: FC<IProps> = ({ children }) => (
  <div className="flex h-screen w-screen overflow-y-auto">
    <Sidebar />
    { children }
  </div>
);
