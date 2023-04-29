import { FC } from 'react';

import { Sidebar } from '@layout/sidebar';
import { Main } from '@layout/main';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}


export const Container: FC<IProps> = ({ children }) => (
  <div className="flex h-screen w-screen overflow-y-auto">
    <Sidebar />
    <Main>
      { children }
    </Main>
  </div>
);
