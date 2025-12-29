import { add, format } from "date-fns";
import { dummyData } from "./data/todo";

function App() {
  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-2xl text-center">
        Tomorrows Date: {format(add(new Date(), { days: 1 }), "do MMMM yyyy")}
      </h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
