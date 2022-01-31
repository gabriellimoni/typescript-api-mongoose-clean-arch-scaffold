export interface BaseUsecase<I = undefined, O = void> {
  exec: (params: I) => Promise<O>
}
