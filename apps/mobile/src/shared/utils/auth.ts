export const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; accessToken=`);
    if (parts.length === 2) {
      const token = parts.pop()?.split(';').shift();
      return token || null;
    }
  }
  return null;
};
