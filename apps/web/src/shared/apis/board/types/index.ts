export namespace GetGuestBook {
  interface GuestBookInfo {
    userId: number;
    profileImg: string;
    boardContent: string;
  }

  export type Res = GuestBookInfo[];
}
