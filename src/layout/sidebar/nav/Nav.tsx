import Link from 'next/link';


export const Nav = () => (
  <nav>
    <ul className="flex flex-col gap-8 font-book text-sm uppercase">
      <li>
        <Link href="/about">Обо мне</Link>
      </li>
      <li>
        <Link href="/brands">Для брендов</Link>
      </li>
      <li>
        <Link href="/blog">Для блогов и экспертов</Link>
      </li>
      <li>
        <Link href="/photoshoot">Личные фотосессии</Link>
      </li>
      <li>
        <Link href="/publications">Публикации в журналах</Link>
      </li>
      <li>
        <Link href="/price">Прайс</Link>
      </li>
      <li>
        <Link href="/reviews">Отзывы</Link>
      </li>
    </ul>
  </nav>
);
