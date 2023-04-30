import { FC } from 'react';

import { Header } from '../header';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Main: FC<IProps> = ({ children }) => (
  <main className="flex h-full w-full flex-col overflow-hidden pb-5 pl-12 pt-40">
    <div className="flex h-full flex-col gap-16">
      <Header title="Профессиональная фотосъёмка в Тюмени" />
      { children }
    </div>
  </main>
);
