import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Container from "./component/Container";
import TodoItems from "./component/todoItems";
import Welcome from "./component/Welcome";

const App = () => {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const onClickButton = (a, b, c) => {
    let onNewItems = {
      name: a,
      dueDate: b,
      dueTime: c,
    };
    const updateTodoItems = [...todoItems, onNewItems];
    setTodoItems(updateTodoItems);
  };

  const handleOnDelete = (deletedItem) => {
    const newTodoItems = todoItems.filter(
      (filterItem) => filterItem.name !== deletedItem
    );
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center>
        <Container>
          <AppName></AppName>
          <AddTodo onClickButton={onClickButton}></AddTodo>
          <Welcome todoItems={todoItems}></Welcome>
          <TodoItems
            todoItems={todoItems}
            handleOnDelete={handleOnDelete}
          ></TodoItems>
        </Container>
      </center>
    </>
  );
};

export default App;
