import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { slides } from '@/assets';
import { Main } from '@/layout/main';


const MainPage = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <Main>
      <motion.div className="h-full w-[115%]">
        <motion.div
          ref={ carousel }
          className="flex h-full cursor-grab gap-5"
          drag="x"
          dragConstraints={{ right: 0, left: -width - 200 }}
        >
          { slides.map((slide) => (
            <motion.div
              key={ slide.id }
              className="flex h-full w-full cursor-grab flex-col items-center justify-end bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <Link
                className="h-fit w-fit cursor-pointer justify-end"
                href={ `${slide.path}` }
              >
                <div className="mb-11 font-med text-lg text-with transition-all hover:text-gray+ active:scale-[0.9] md:text-md">{ slide.name }</div>
              </Link>
            </motion.div>
          )) }
        </motion.div>
      </motion.div>
    </Main>
  );
};

export default MainPage;
