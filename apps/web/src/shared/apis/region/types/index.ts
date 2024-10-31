namespace GetRegionList {
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
