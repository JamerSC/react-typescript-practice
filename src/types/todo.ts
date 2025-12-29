export interface Todo {
  id: number;
  title: string;
  completed?: boolean; // ? optional
  //   completed: boolean | string; // union
}
