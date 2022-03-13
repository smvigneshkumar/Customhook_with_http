import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "./styles.css";
import useHttp from "./useHttp";

export default function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = useHttp();

  useEffect(() => {
    const applyData = (data) => {
      const tasks = [];
      for (const taskKey in data) {
        tasks.push({ id: taskKey, text: data[taskKey] });
      }
      setTodos(tasks);
    };
    fetchTodos(
      {
        url:
          "https://react-http-request-6538b-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
      },
      applyData
    );
  }, [fetchTodos]);
  const handleAddTodo = (data) => {
    setTodos((prevData) => prevData.concat(data));
  };
  return (
    <div className="App">
      <AddTodoForm addTodo={handleAddTodo} />
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.text}</p>;
        })}
    </div>
  );
}
