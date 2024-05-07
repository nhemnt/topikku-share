import { useEffect, useState } from 'react';

interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
    } catch (error) {
      console.error('Error parsing stored value:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing value in localStorage:', error);
    }
  }, [value, key]);

  return [value, setValue] as const;
}
