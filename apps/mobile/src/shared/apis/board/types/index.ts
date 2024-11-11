export namespace GetGuestBook {
  interface GuestBookInfo {
    userId: number;
    profileImg: string;
    boardContent: string;
    username: string;
  }

  export type Res = GuestBookInfo[];
}
