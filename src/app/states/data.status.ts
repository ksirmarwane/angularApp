export enum DataEnumStatus {
  LOADED,
  LOADING,
  ERROR
}

//generic interface
export interface DataStatus<T> {
  status?: DataEnumStatus,
  data?: T,
  errorMessage?: string

}

