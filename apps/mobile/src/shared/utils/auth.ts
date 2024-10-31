export const getAuthHeader = () => {
  const token = localStorage.getItem('accessToken');
  return token;
};
