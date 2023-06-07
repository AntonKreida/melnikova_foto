/* eslint-disable max-len */
import {
  FC, useState, useEffect, useRef
} from 'react';
import { useRouter } from 'next/router';

import { headerTitles, IHeaderTitles } from '@lib';
import { ButtonUp } from '@shared';
import { HeaderTitles } from '@layout/header-titles';


interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  titlePage?: string;
}

export const Main: FC<IProps> = ({ children, titlePage }) => {
  const params = useRouter();
  const path = params.pathname.replace('/', '');
  const titlesPaths = headerTitles[path as keyof IHeaderTitles] !== undefined ? headerTitles[path as keyof IHeaderTitles] : headerTitles.default;

  const [backToUpButton, setBackToUpButton] = useState(false);
  const refMain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToUpButton(true);
      } else {
        setBackToUpButton(false);
      }
    });
  }, []);

  const getNormalCase = () => false;

  const handlerClickUpScrollPage = () => {
    refMain.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main
      ref={ refMain }
      className={ `ml-[25%] flex w-full flex-col overflow-y-auto overflow-x-hidden pb-14 pl-12 pt-40 ${path && path !== 'about' ? 'h-fit' : 'h-full'}` }
    >
      <div className="relative flex h-full flex-col gap-16">
        <HeaderTitles
          path={ getNormalCase() }
          subtitle={ titlesPaths.subtitle }
          title={ titlePage || titlesPaths.title }
        />
        { children }
        { (backToUpButton && path) && <ButtonUp onClick={ handlerClickUpScrollPage } /> }
      </div>
    </main>
  );
};
