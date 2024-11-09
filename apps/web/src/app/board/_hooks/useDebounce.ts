import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [디바운스된값, set디바운스된값] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set디바운스된값(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return 디바운스된값;
}

export default useDebounce;
