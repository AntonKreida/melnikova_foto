import Link from 'next/link';

import Shape from '@images/icon/shape.svg';


export const Nav = () => (
  <nav>
    <ul className="flex w-fit flex-col gap-8 font-book text-sm uppercase">
      <li>
        <Link href="/about"><span>Обо мне</span></Link>
      </li>
      <li className="relative flex flex-col gap-8">
        <span>Для брендов</span>
        <ul className="flex flex-col gap-6 pl-4">

          <li>
            <Link href="/lookbook"><span>Лукбуки</span></Link>
          </li>
          <li>
            <Link href="/campaign"><span>Кампейн</span></Link>
          </li>
          <li>
            <Link href="/subject"><span>Предметное фото</span></Link>
          </li>
          <li>
            <Link href="/beauty"><span>Бьюти съемка</span></Link>
          </li>
        </ul>

        <Shape className="absolute right-[75px] top-0 translate-y-1/2" />
      </li>
      <li>
        <Link href="/blog"><span>Для блогов и экспертов</span></Link>
      </li>
      <li>
        <Link href="/photoshoot"><span>Личные фотосессии</span></Link>
      </li>
      <li>
        <Link href="/publications"><span>Публикации в журналах</span></Link>
      </li>
      <li>
        <Link href="/price"><span>Прайс</span></Link>
      </li>
      <li>
        <Link href="/reviews"><span>Отзывы</span></Link>
      </li>
    </ul>
  </nav>
);
