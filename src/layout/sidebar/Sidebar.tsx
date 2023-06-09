import Link from 'next/link';

import { navList } from '@lib';

import { Nav } from './nav';
import { Contacts } from './contacts';


export const Sidebar = () => (
  <aside className="fixed h-screen w-[25%] overflow-y-scroll px-16 pb-12 pt-32 shadow-custom scrollbar-hide md:px-8">
    <div className="flex h-full w-full">
      <div className="flex h-full w-full flex-col justify-between md:gap-12">

        <div className="flex h-full w-full flex-col gap-16 md:gap-8">
          <Link className="flex flex-col gap-2" href="/">
            <h1 className="font-default text-lg uppercase text-black+ md:text-md">
              Александра  <br />Мельникова
            </h1>
            <h2 className="font-default text-base uppercase tracking-subtitle text-black+ opacity-50 md:text-xs">
              PHOTOGRAPHER
            </h2>

          </Link>
          <Nav navList={ navList } />
        </div>

        <Contacts />
      </div>
    </div>
  </aside>
);
