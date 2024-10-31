export namespace GetUserList {
  export interface Params {
    page?: number;
    searchedname?: string;
  }

  export interface Res {
    userList: [
      {
        username: string;
        profileImg: string;
        userscore: number;
        userRank: number;
      },
    ];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}

export namespace GetUserGradeList {
  export interface Params {
    grade: 'PURPLE' | 'GREY' | 'RED' | 'BLUE' | 'GREEN' | 'YELLOW';
    page: number;
  }

  interface User {
    profileImg?: string;
    username: string;
    userscore: number;
    userRank: number;
  }

  export interface Res {
    userList: User[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}
