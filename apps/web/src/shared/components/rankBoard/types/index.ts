interface UserInfo {
  profileImg?: string;
  username: string;
  userscore: number;
  userRank: number;
}

export interface UserListRes {
  userList: UserInfo[];
}
