import Link from 'next/link';

import { navList } from '@lib';

import { Nav } from './nav';
import { Contacts } from './contacts';


export const Sidebar = () => (
  <aside className="h-screen w-2/5 overflow-y-scroll shadow-custom scrollbar-hide">
    <div className="flex h-full w-full px-16 pb-5 pt-32 md:px-8">
      <div className="flex flex-col justify-between md:gap-12">

        <div className="flex flex-col gap-16 md:gap-8">
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
