import Home from "./component/Home";
import "./App.css";
function App() {
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <div className="w-full h-20 bg-purple-50"></div>
      <div className="w-full h-20 bg-purple-100"></div>
      <div className="w-full h-20 bg-purple-200"></div>
      <div className="w-full h-20 bg-purple-300"></div>
      <div className="w-full h-20 bg-purple-400"></div>
      <div className="w-full h-20 bg-purple-500"></div>
      <div className="w-full h-20 bg-purple-600"></div>
      <div className="w-full h-20 bg-purple-700"></div>
      <div className="w-full h-20 bg-purple-800"></div>
      <div className="w-full h-20 bg-purple-900"></div>
      <div className="absolute left-10 top-3">
        <h1 className="text-4xl font-bold">ToDoIt.</h1>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
