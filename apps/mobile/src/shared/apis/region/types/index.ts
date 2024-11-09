export namespace GetRegionList {
  export interface Params {
    page: number;
    regionName?: string;
  }

  interface Region {
    regionlName: string;
    regionScore: number;
    regionRank: number;
  }

  export interface Res {
    regionList: Region[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}

export namespace GetRegionUserList {
  export interface Params {
    page: number;
    regionName: string;
  }

  interface User {
    username: string;
    profileImg: string;
    userscore: number;
    userRank: number;
  }

  export interface Res {
    userInfoByRegion: User[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}
