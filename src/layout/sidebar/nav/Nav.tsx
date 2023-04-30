import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FC, useState, KeyboardEvent, useRef
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Shape from '@images/icon/shape.svg';


interface IProps {
  navList: {
    id: number;
    name: string;
    path?: string;
    subNavList?: {
      id: number;
      name: string;
      path: string;
    } [];
  }[];
}


export const Nav: FC<IProps> = ({ navList }) => {
  const router = useRouter();
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const ref = useRef<HTMLElement>();


  const handlerOpenSubmenu = () => {
    setIsOpenSubmenu(!isOpenSubmenu);
  };

  const handlerKeyDownSubmenu = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === '13' && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <nav>
      <ul className="flex w-fit flex-col gap-8 font-book text-sm uppercase md:gap-6 md:text-xs">
        { navList.map((item) => {
          if (!item.subNavList) {
            return (
              <li key={ item.id }>
                { item.path && (
                  <Link href={ item.path ? `${item.path}` : '' }>
                    <span
                      className={ `relative ${router.pathname === item.path
                        && 'opacity-50 before:absolute before:left-[-10px] before:top-0 before:h-full before:w-1 before:bg-black+ before:opacity-50'}` }
                    >{ item.name }
                    </span>
                  </Link>
                ) }
              </li>
            );
          }

          return (
            <li
              key={ item.id }
              className="relative flex flex-col"
              role="menuitem"
              tabIndex={ 0 }
              onClick={ handlerOpenSubmenu }
              onKeyDown={ handlerKeyDownSubmenu }
            >
              <span
                className={ `w-fit ${isOpenSubmenu
                  && 'opacity-50 before:absolute before:left-[-10px] before:top-0 before:h-[20px] before:w-1 before:bg-black+ before:opacity-50 md:before:h-[12px]'}` }
              >
                { item.name }
              </span>

              <AnimatePresence>
                <motion.ul
                  animate={ isOpenSubmenu ? { height: 'auto', opacity: 1, marginTop: 30 } : { height: 0, opacity: 0, marginTop: 0 } }
                  className="flex h-0 flex-col gap-6 overflow-hidden pl-4 md:gap-3"
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  { item.subNavList.map((subItem) => (
                    <li key={ subItem.id }>
                      <Link href={ subItem.path }>
                        <span className={ `relative ${router.pathname === item.path
                          && 'opacity-50 before:absolute before:left-[-10px] before:top-0 before:h-full before:w-1 before:bg-black+ before:opacity-50'}` }
                        >{ subItem.name }
                        </span>
                      </Link>
                    </li>
                  )) }
                </motion.ul>
              </AnimatePresence>

              <Shape className={ `absolute right-[75px] top-0 translate-y-1/2 transition md:right-[35px] md:translate-y-[10%] ${isOpenSubmenu && 'rotate-90 opacity-50'}` } />
            </li>
          );
        }) }
      </ul>
    </nav>
  );
};
