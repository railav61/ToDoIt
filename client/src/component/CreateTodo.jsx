import { useState } from "react";
import axios from "axios";

function CreateTodo() {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim() === "") {
    } else {
      axios
        .post("https://todoit-awm0.onrender.com/add", { task: task })
        .then((result) => location.reload())
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="border-2 border-black w-96 h-fit mt-6">
      <input
        type="text"
        placeholder="Enter task"
        className="px-2 py-1 w-4/5 "
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="button"
        className="bg-black text-white w-1/5 py-1 border-2 rounded-md"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
export default CreateTodo;
