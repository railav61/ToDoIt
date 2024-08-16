import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { InfinitySpin } from "react-loader-spinner";
import CreateTodo from "./CreateTodo";
import axios from "axios";

import "./home.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://todoit-awm0.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  function handleComplete(id) {
    axios
      .put("https://todoit-awm0.onrender.com/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  }
  function handleDelete(id) {
    axios
      .delete("https://todoit-awm0.onrender.com/delete/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  }
  return (
    <div className="home min-h-screen w-screen absolute flex">
      <h1 className="text-2xl font-bold mt-20 text-black">ToDo List</h1>
      <CreateTodo />

      {loading ? (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFFFFF"
          ariaLabel="infinity-spin-loading"
        />
      ) : todos.length === 0 ? (
        <div className="mt-5 text-4xl font-bold text-black">No Record</div>
      ) : (
        todos.map((todo) => (
          <div className="flex min-w-[500px] max-w-[800px] py-2 px-2 bg-black text-white mt-5 rounded-md ">
            <button onClick={() => handleComplete(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="ml-[-3px] mr-1 mt-[3px]" />
              ) : (
                <BsCircleFill className="ml-[-3px] mr-1 mt-[3px]" />
              )}
            </button>
            <p className={todo.done ? "w-fit line-through" : "w-fit"}>
              {todo.task}
            </p>
            <button onClick={() => handleDelete(todo._id)}>
              <MdDelete className="ml-[400px] mt-[3px] text-2xl" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
