declare module '*.woff';
declare module '*.woff2';
declare module '*.png';

declare module '*.svg' {
  import React from 'react';


  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export const src: string;
}
