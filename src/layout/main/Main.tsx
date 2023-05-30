/* eslint-disable max-len */
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { headerTitles, IHeaderTitles } from '@lib';
import { ButtonUp } from '@ui-kit';

import { Header } from '../header';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Main: FC<IProps> = ({ children }) => {
  const params = useRouter();
  const path = params.pathname.replace('/', '');
  const titles = headerTitles[path as keyof IHeaderTitles] !== undefined ? headerTitles[path as keyof IHeaderTitles] : headerTitles.default;

  const [backToUpButton, setBackToUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        setBackToUpButton(true);
      } else {
        setBackToUpButton(false);
      }
    });
  }, []);

  const getNormalCase = () => {
    if (path === 'lookbook') {
      return true;
    }

    return false;
  };

  const handlerClickUpScrollPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="ml-[25%] flex h-full w-full flex-col overflow-hidden pb-14 pl-12 pt-40">
      <div className="relative flex h-full flex-col gap-16">
        <Header path={ getNormalCase() } subtitle={ titles.subtitle } title={ titles.title } />
        { children }
        { backToUpButton && <ButtonUp text="Назад" onClick={ handlerClickUpScrollPage } /> }
      </div>

    </main>
  );
};
