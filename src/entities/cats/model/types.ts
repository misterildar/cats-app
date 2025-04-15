export interface CatsProps {
  catData: CatProps[];
  error: string | null;
  setData: (data: CatProps[]) => void;
  setError: (error: string | null) => void;
}

export interface CatProps {
  id: string;
  url: string;
  width: number;
  height: number;
}
