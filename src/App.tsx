import { add, format } from "date-fns";
import { dummyData } from "./data/todo";
// import TodoItem from "./components/TodoItem";
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  // use state same as oop getter/setter
  const [todos, setTodos] = useState(dummyData);

  // fnx to set complete todo
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    // alert(`Todo id with ${id} is now ${completed ? "completed" : "not completed"}`);
  }

  // create/add new task
  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  // remove/delete todo fxn
  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="py-10 h-screen overflow-y-auto">
      <h1 className="font-bold text-2xl text-center">Todo's</h1>
      <p className="text-center">
        Today's Date: {format(add(new Date(), { days: 0 }), "do MMMM yyyy")}
      </p>
      <br />
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
