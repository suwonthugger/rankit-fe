interface UserInfo {
  imageUrl?: string;
  username: string;
  userscore: number;
  rank: number;
}

export interface UserListRes {
  userList: UserInfo[];
}
