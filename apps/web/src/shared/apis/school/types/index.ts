export namespace GetSchoolList {
  export interface Params {
    page: number;
    searchedSchoolName?: string;
  }

  interface School {
    schoolName: string;
    schoolScore: number;
    schoolRank: number;
  }

  export interface Res {
    schoolList: School[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}
