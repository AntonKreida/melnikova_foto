export interface IFallback<T> {
  fallback?: {
    [key: string]: T;
  };
}
