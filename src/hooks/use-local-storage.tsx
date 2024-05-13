import { useEffect, useState } from 'react';

interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing value in localStorage:', error);
    }
  }, [value, key]);

  return [value, setValue] as const;
}
