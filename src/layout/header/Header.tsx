import { FC } from 'react';


interface IProps {
  title: string;
  subtitle?: string;
  children?: JSX.Element | JSX.Element[] | string;
}


export const Header: FC<IProps> = ({ title, subtitle, children }) => (
  <header className="flex justify-between">
    <div className="flex h-16 flex-col">
      <h1 className="font-default text-xl uppercase text-black+">
        { title }
      </h1>
      { subtitle && (
        <h2 className="text-sub font-light lowercase text-black+ opacity-70">
          { subtitle }
        </h2>
      ) }
    </div>
    { children }
  </header>
);
