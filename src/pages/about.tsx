/* eslint-disable max-len */
import Image from 'next/image';

import AboutImg from '@public/assets/images/about/about.jpg';


const listItems = [
  {
    id: 1,
    text: 'желание быть полезной (решать проблему других),'
  },
  {
    id: 2,
    text: 'общение с интересными людьми,'
  },
  {
    id: 3,
    text: 'повышение самоценности.'
  },
];


const About = () => (
  <div className="flex h-full gap-10 overflow-hidden pr-[30%]">
    <div className="h-full w-full max-w-full">
      <Image priority alt="Александра Мельникова" className="h-full w-[471px] object-cover" src={ AboutImg } />
    </div>
    <div className="flex h-full w-full flex-col">

      <div className="flex flex-none shrink flex-col gap-4">
        <h1 className="font-default text-md text-black+ md:text-liBase">
          Привет! Приятно познакомиться, я
          <br />Мельникова Александра – фотограф.
        </h1>

        <p className="text-md font-light text-black+ md:text-liBase">
          За три года в фотографии я провела более 1000 успешных съёмок, публиковалась в международных журналах, работала с брендами и начала обучать фотографии других. Знаю всё о позировании и том, как сделать так, чтобы фотографии Вам понравились.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h1 className="font-default text-md text-black+ md:text-liBase">Почему фотографии?</h1>
        <div className="flex flex-col">
          <p className="text-md font-light text-black+ md:text-liBase">Честно? Они помогли мне реализовать три потребности:</p>
          <ul className="flex flex-col text-md font-light text-black+ md:text-liBase">
            { listItems.map((item) => (
              <li key={ item.id } className="relative left-[20px] inline-block before:absolute before:left-[-20px] before:top-0 before:block before:h-[15px] before:w-[15px] before:translate-y-[50%] before:bg-[url('/assets/icon/like.svg')] before:bg-no-repeat md:text-liBase">
                { item.text }
              </li>
            )) }
          </ul>
        </div>
        <p className="text-md font-light text-black+ md:text-liBase">
          Здесь я чувствую себя на своём месте. Именно поэтому меня ценят клиенты, и мы вместе достигаем крутых результатов.
        </p>
      </div>

    </div>
  </div>
);

export default About;
