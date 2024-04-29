import AppName from "./componenets/AppName";
import AddTodo from "./componenets/AddTodo";
import WelcomeMessage from "./componenets/WelcomeMessage";

import TodoItems from "./componenets/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "4/10/2023",
    },
  ];
  const [todoName, setTodoName] = useState(initialTodoItems);
  const handleButtonClicked = (todoItem, todoDate) => {
    const newTodoItems = [
      ...todoName,
      {
        name: todoItem,
        dueDate: todoDate,
      },
    ];
    setTodoName(newTodoItems);
  };
  const handleDeleteClicked = (todoItem) => {
    const newTodoItems = todoName.filter((item) => item.name !== todoItem);
    setTodoName(newTodoItems);
  };

  return (
    <>
      <center classNameName="todo-container">
        <AppName />
        <AddTodo onButtonClick={handleButtonClicked} />
        {todoName.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoName}
          onDelete={handleDeleteClicked}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
