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

export namespace GetSchoolUserList {
  export interface Params {
    page: number;
    schoolName: string;
  }

  interface User {
    username: string;
    profileImg: string;
    userscore: number;
    userRank: number;
  }

  export interface Res {
    userInfoBySchools: User[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}
