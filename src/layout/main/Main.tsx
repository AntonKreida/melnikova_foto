import { FC } from 'react';
import { useRouter } from 'next/router';

import { HeaderTitles, IHeaderTitles } from '@/lib';

import { Header } from '../header';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Main: FC<IProps> = ({ children }) => {
  const params = useRouter();
  const key = params.pathname.replace('/', '');

  const titles = key ? HeaderTitles[key as keyof IHeaderTitles] : HeaderTitles.default;

  return (
    <main className="ml-[25%] flex h-full w-full flex-col overflow-hidden pb-14 pl-12 pt-40">
      <div className="flex h-full flex-col gap-16">
        <Header subtitle={ titles.subtitle } title={ titles.title } />
        { children }
      </div>
    </main>
  );
};
