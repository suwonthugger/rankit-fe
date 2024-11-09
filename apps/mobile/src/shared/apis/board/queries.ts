import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getGuestbook, postGuestBook } from './axios';

export const useGetGuestbook = () => {
  return useQuery({
    queryKey: ['guestBook'],
    queryFn: getGuestbook,
  });
};

export const usePostGuestBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => postGuestBook({ content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestBook'] });
    },
  });
};
