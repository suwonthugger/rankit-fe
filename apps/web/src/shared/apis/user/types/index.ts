import { TierTypes } from '@/app/user/[userId]/_components/profile/_types';

export namespace GetUserRank {
  export interface Params {
    username: string;
  }

  export interface Res {
    userRank: number;
  }
}

export namespace GetUserSchool {
  export interface Params {
    username: string;
  }

  export interface Res {
    schoolRankDto: {
      schoolName: string;
      schoolRank: number;
    };
  }
}

export namespace GetUserRegion {
  export interface Params {
    username: string;
  }

  export interface Res {
    regionRankDto: {
      regionName: string;
      regionRank: number;
    };
  }
}

export namespace GetUserLang {
  export interface Params {
    username: string;
  }

  export interface Res {
    langName: string;
  }
}

export namespace GetUserExp {
  export interface Params {
    username: string;
  }

  export interface Res {
    percent: number;
    score: number;
    remainScore: number;
  }
}

export namespace GetSuggestFriend {
  type dataType = {
    grade: TierTypes;
    language: string;
    profileImg: string;
    regionName: string;
    schoolName: string;
    username: string;
  };

  export type Res = dataType[];
}

export namespace GetUserIntroduction {
  export interface Params {
    username: string;
  }

  export interface Res {
    title: string;
    oneLiner: string;
    goodAt: string;
    learningGoal: string;
  }
}

export namespace GetUserPageUserInfo {
  export interface Params {
    username: string;
  }

  export interface Res {
    username: string;
    grade: TierTypes;
    profileImg: string;
  }
}

export namespace PutSchool {
  export interface Params {
    modifySchoolName: string;
    email: string;
    certificateCode: string;
  }
}
