import { FC } from 'react';


interface IProps {
  title: string;
  subtitle?: string ;
  path?: boolean;
}


export const Header: FC<IProps> = ({ title, subtitle, path }) => (
  <header className="flex justify-between">
    <h1 className={ `font-default text-xl text-black+ ${path ? 'normal-case' : 'uppercase'}` }>
      { title }
    </h1>
    { subtitle && (
      <h2 className="text-sub font-light lowercase text-black+ opacity-70">
        { subtitle }
      </h2>
    ) }
  </header>
);
