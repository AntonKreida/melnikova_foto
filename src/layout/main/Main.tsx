/* eslint-disable max-len */
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { headerTitles, IHeaderTitles } from '@lib';
import { ButtonUp } from '@shared';

import { HeaderTitles } from '../header-titles';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  titlePage?: string;
}

export const Main: FC<IProps> = ({ children, titlePage }) => {
  const params = useRouter();
  const path = params.pathname.replace('/', '');
  const titlesPaths = headerTitles[path as keyof IHeaderTitles] !== undefined ? headerTitles[path as keyof IHeaderTitles] : headerTitles.default;

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

  const getNormalCase = () => false;

  const handlerClickUpScrollPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="ml-[25%] flex h-full w-full flex-col overflow-y-auto pb-14 pl-12 pt-40">
      <div className="relative flex h-full flex-col gap-16">
        <HeaderTitles
          path={ getNormalCase() }
          subtitle={ titlesPaths.subtitle }
          title={ titlePage || titlesPaths.title }
        />
        { children }
        { backToUpButton && <ButtonUp text="Назад" onClick={ handlerClickUpScrollPage } /> }
      </div>

    </main>
  );
};
