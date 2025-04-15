import { request } from '@/shared/api';

export const getCats = () => request('GET', '/images/search?size=small');
