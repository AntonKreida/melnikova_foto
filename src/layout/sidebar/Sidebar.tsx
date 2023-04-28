import Link from 'next/link';

import { Nav } from './nav';
import { Contacts } from './contacts';


export const Sidebar = () => (
  <aside className="fixed left-0 top-0 h-full w-5/12">
    <div className="flex h-full w-full px-16 py-32">
      <div className="flex flex-col justify-between">

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <h1 className="font-default text-title uppercase text-black+">
                Александра Мельникова
              </h1>
            </Link>
            <h2 className="font-default text-xs uppercase tracking-subtitle text-black+ opacity-50">
              PHOTOGRAPHER
            </h2>
          </div>
          <Nav />
        </div>

        <Contacts />

      </div>
    </div>
  </aside>
);
