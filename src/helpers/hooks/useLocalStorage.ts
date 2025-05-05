import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error('useLocalStorage init error:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      const prev = localStorage.getItem(key);
      const next = JSON.stringify(value);
      if (prev !== next) {
        localStorage.setItem(key, next);
      }
    } catch (error) {
      console.error('useLocalStorage write error:', error);
    }
  }, [key, value]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setValue(JSON.parse(event.newValue));
        } catch {
          setValue(defaultValue);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  return [value, setValue] as const;
}

// Старая версия
// import { useState, useEffect } from 'react';

// export function useLocalStorage<T>(key: string, defaultValue: T) {
//   const [value, setValue] = useState<T>(() => {
//     if (typeof window === 'undefined') return defaultValue; 
//     try {
//       const stored = localStorage.getItem(key);
//       return stored ? JSON.parse(stored) : defaultValue;
//     } catch (error) {
//       console.error('useLocalStorage error:', error);
//       return defaultValue;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error('useLocalStorage error:', error);
//     }
//   }, [key, value]);

//   return [value, setValue] as const;
// }