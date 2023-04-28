import Link from 'next/link';

import { navList } from '@lib';

import { Nav } from './nav';
import { Contacts } from './contacts';


export const Sidebar = () => (
  <aside className="fixed left-0 top-0 z-10 h-full w-1/4 overflow-y-scroll shadow-custom scrollbar-hide">
    <div className="flex w-full px-16 py-32">
      <div className="flex flex-col gap-16">

        <div className="flex flex-col gap-16">
          <Link className="flex flex-col gap-2" href="/">
            <h1 className="font-default text-title uppercase text-black+">
              Александра Мельникова
            </h1>
            <h2 className="font-default text-xs uppercase tracking-subtitle text-black+ opacity-50">
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
