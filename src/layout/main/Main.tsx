import { FC } from 'react';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Main: FC<IProps> = ({ children }) => (
  <main className="flex h-screen w-full flex-col pb-5 pl-12 pt-40">
    { children }
  </main>
);
