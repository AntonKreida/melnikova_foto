import React, { FC } from 'react';


interface IProps {
  onClick: React.MouseEventHandler;
}


export const ButtonUp: FC<IProps> = ({ onClick }) => (
  <button type="button" onClick={ onClick } />
);
