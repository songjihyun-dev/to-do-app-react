import { useState } from "react";
import "./App.css";

export const App = (props) => {
  const [todo, setTodo] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const TodoList = ({ todo, index, handleDel, handleDone }) => {
    return (
      <li key={index} className="todo">
        <div>
          <div className="todo-title">{todo.title}</div>
          {todo.todo}
        </div>
        <div className="todo-btns">
          <button onClick={() => handleDone(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </button>
          <button className="del-btn" onClick={() => handleDel(todo.id)}>
            삭제
          </button>
        </div>
      </li>
    );
  };

  const toggleTodoFinished = (targetId) => {
    let tempArr = [...todos, ...doneTodos];
    let idx = tempArr.findIndex((elem) => elem.id === targetId);
    let tempBool = tempArr[idx].isDone;

    if (idx != -1) {
      tempArr[idx] = {
        ...tempArr[idx],
        isDone: tempBool === true ? false : true,
      };
    }
    if (tempBool === false) {
      setDoneTodos([
        ...doneTodos.filter((todo) => todo.isDone === true),
        tempArr[idx],
      ]);
    } else {
      setDoneTodos([...tempArr.filter((todo) => todo.isDone === true)]);
    }
    setTodos([...tempArr.filter((todo) => todo.isDone === false)]);
  };

  const onTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const onTodoTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "" || todoTitle === "") {
      return;
    }
    setTodo("");
    setTodoTitle("");

    let temp_todo = {
      id: todos.length + 1,
      title: todoTitle,
      todo: todo,
      isDone: false,
    };

    setTodos([...todos, temp_todo]);
  };

  const delTodoHandler = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
    setDoneTodos(doneTodos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="todo-container">
      <h1 className="title">todo</h1>
      <form className="add-todo-form" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onTodoTitleChange}
          value={todoTitle}
          placeholder="제목을 입력해 주세요."
        />
        <input
          type="text"
          onChange={onTodoChange}
          value={todo}
          placeholder="할 일을 입력해주세요."
        />
        <button>추가하기</button>
      </form>
      <div>
        <h3 className="todo-state">Working {todos.length}</h3>
        <ul className="todo-list">
          {todos.map((todo, index, id, isDone) => {
            return (
              <TodoList
                handleDone={toggleTodoFinished}
                handleDel={delTodoHandler}
                todo={todo}
                index={index}
                id={id}
                isDone={isDone}
              />
            );
          })}
        </ul>
        <h3 className="todo-state">Done {doneTodos.length}</h3>
        <ul className="done-todo-list">
          {doneTodos.map((todo, index, id, isDone) => {
            return (
              <TodoList
                handleDone={toggleTodoFinished}
                handleDel={delTodoHandler}
                todo={todo}
                index={index}
                isDone={isDone}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
