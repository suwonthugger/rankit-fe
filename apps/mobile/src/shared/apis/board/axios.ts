import { authClient, client } from '../client';
import { GetGuestBook } from './types';

const BOARD_URL = {
  GET_GUESTBOOK: '/guestbook',
  POST_GUESTBOOK: '/guestbook/write',
};

export const getGuestbook = async (): Promise<GetGuestBook.Res> => {
  const response = await client.get(BOARD_URL.GET_GUESTBOOK);
  return response.data;
};

export const postGuestBook = async (content: string) => {
  await authClient.post(BOARD_URL.POST_GUESTBOOK, content);
};
