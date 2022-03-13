import { useRef } from "react";
import useHttp from "./useHttp";

const AddTodoForm = (props) => {
  const inputRef = useRef();
  const applyData = (todoData, data) => {
    const value = { id: data.name, text: todoData };
    props.addTodo(value);
  };

  const fetchTodos = useHttp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchTodos(
      {
        url:
          "https://react-http-request-6538b-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
        method: "POST",
        body: inputRef.current.value
      },
      applyData.bind(null, inputRef.current.value)
    );
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default AddTodoForm;
