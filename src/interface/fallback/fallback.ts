export interface IFallback<T, E> {
  fallback: {
    [key: string]: T;
  };
  errorMessage: E;
}
