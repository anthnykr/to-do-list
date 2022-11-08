import { useState } from "react";

function ToDoForm() {
  const [Todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  return (
    <form>
      <input />
      <button />
    </form>
  );
}

export default ToDoForm;
