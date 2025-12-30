import { useState } from "react";

// props
interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

// pass the type props using destructure
export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // check if blank or empty field invalid submission
    if (!input.trim()) return;

    // submit the input field
    onSubmit(input);

    // clear the input field after submitted
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
      >
        Add
      </button>
      {/* grow will widen the input element with flex property*/}
    </form>
  );
}
