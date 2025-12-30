import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void; // callback fnx
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
}: TodoListProps) {
  // sort todo list - completed below - good for small array
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* && operator is primarily used for conditional rendering in JSX, leveraging JavaScript's short-circuit evaluation behavior.  */}
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          You don't have a todo yet. Please add new
        </p>
      )}
    </>
  );

  // used the prop drilling from todo items (child), todo list (parent), app (main parent)
}
