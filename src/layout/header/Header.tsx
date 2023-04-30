import { FC } from 'react';


interface IProps {
  title: string;
  subtitle?: string;
}


export const Header: FC<IProps> = ({ title, subtitle }) => (
  <header className="flex justify-between">
    <h1 className="font-default text-xl uppercase text-black+">
      { title }
    </h1>
    { subtitle && (
      <h2 className="text-sub font-light lowercase text-black+ opacity-70">
        { subtitle }
      </h2>
    ) }
  </header>
);
