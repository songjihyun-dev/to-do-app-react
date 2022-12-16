import React, { useState } from "react";

import { Form } from "../Form/Form";
import { TodoLists } from "./TodoLists";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const onDeleteHandler = (event) => {
    setTodoList(todoList.filter((todo) => todo.id !== +event.target.id));
  };

  const onToggleFinished = (event) => {
    let idx = todoList.findIndex((todo) => todo.id === +event.target.id);
    let temp_todo = todoList
      .slice()
      .filter((todo) => todo.id !== +event.target.id);
    let tempBool = todoList[idx].isDone;
    let target_todo;

    if (idx !== -1) {
      target_todo = todoList[idx] = {
        ...todoList[idx],
        isDone: tempBool === true ? false : true,
      };
      setTodoList([...temp_todo, target_todo]);
    }
  };

  const addTodoHandler = (todoTitle, todoContent) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          title: todoTitle,
          content: todoContent,
          id: Date.now(),
          isDone: false,
        },
      ];
    });
  };

  return (
    <>
      <Form onAddTodo={addTodoHandler} />
      <TodoLists
        status="working"
        todos={
          todoList &&
          todoList.filter((todo) => {
            return todo.isDone === false;
          })
        }
        onDelete={onDeleteHandler}
        onFinished={onToggleFinished}
      />
      <TodoLists
        status="finished"
        todos={
          todoList &&
          todoList.filter((todo) => {
            return todo.isDone === true;
          })
        }
        onDelete={onDeleteHandler}
        onFinished={onToggleFinished}
      />
    </>
  );
};
