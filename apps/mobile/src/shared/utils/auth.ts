export const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    return token;
  }
  return null;
};
