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
  <div className="flex h-full gap-4 overflow-hidden pr-[25%]">
    <div className="h-full w-full flex-auto">
      <Image priority alt="Александра Мельникова" className=" h-full w-[471px] object-cover" src={ AboutImg } />
    </div>
    <div className="flex h-full w-full flex-col">

      <div className="flex flex-none shrink flex-col gap-4">
        <h1 className="font-default text-liBase text-black+ ">
          Привет! Приятно познакомиться, я
          <br />Мельникова Александра – фотограф.
        </h1>

        <p className="text-liBase font-light text-black+">
          За три года в фотографии я провела более 1000 успешных съёмок, публиковалась в международных журналах, работала с брендами и начала обучать фотографии других. Знаю всё о позировании и том, как сделать так, чтобы фотографии Вам понравились.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h1 className="font-default text-liBase text-black+">Почему фотографии?</h1>
        <div className="flex flex-col">
          <p className="text-liBase font-light text-black+">Честно? Они помогли мне реализовать три потребности:</p>
          <ul className="flex flex-col text-liBase font-light text-black+">
            { listItems.map((item) => (
              <li key={ item.id } className="relative left-[15px] inline-block before:absolute before:left-[-20px] before:top-0 before:block before:h-[15px] before:w-[15px] before:translate-y-[50%] before:bg-[url('/assets/icon/like.svg')] before:bg-no-repeat">
                { item.text }
              </li>
            )) }
          </ul>
        </div>
        <p className="text-liBase font-light text-black+">Здесь я чувствую себя на своём месте. Именно поэтому меня ценят клиенты, и мы вместе достигаем крутых результатов.</p>
      </div>

    </div>
  </div>
);

export default About;
