import { useCatsStore } from './store';
import { getCats } from '@/shared/api';

const { setError, setData } = useCatsStore.getState();

const handleError = (error: unknown, errorMessage: string) => {
  const errorText = error instanceof Error ? error.message : errorMessage;
  setError(errorText);
};

export const fetchCats = async () => {
  try {
    const response = await getCats();
    if (Array.isArray(response)) setData(response);
  } catch (error) {
    handleError(error, 'Ошибка при загрузке ');
  }
};
