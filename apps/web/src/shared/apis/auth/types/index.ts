export namespace PostUnivCertificate {
  export interface Params {
    email: string;
    univName: string;
  }
}

export namespace PostUnivValidate {
  export interface Params {
    email: string;
    univName: string;
    code: string;
  }
}

export namespace PostAuthJoin {
  export interface Params {
    univName: string | null;
    region: string | null;
  }
}

export namespace GetUserInfo {
  export interface Res {
    username: string;
    univName: string;
    regionName: string;
    profileImg: string;
    title: string;
    userRank: 0;
    grade: 'PURPLE' | 'GREY' | 'RED' | 'BLUE' | 'GREEN' | 'YELLOW';
  }
}
