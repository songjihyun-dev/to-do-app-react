import React from "react";

import { StyledButton } from "../../UI/Button";
import { Link } from "react-router-dom";

import styles from "./TodoLists.module.css";

export const TodoLists = (props) => {
  return (
    <>
      <h3 className={styles.title}>{props.status}</h3>
      <ul className={styles.todoList} id={props.status}>
        {props.todos &&
          props.todos.map((todo) => {
            return (
              <li className={styles.todo} key={todo.id}>
                <Link
                  to={{
                    pathname: `${todo.id}`,
                    state: `${props.todos}`,
                  }}
                  className={styles.showDetail}
                >
                  상세보기
                </Link>
                <h3>{todo.title}</h3>
                <div>{todo.content}</div>
                <div className={styles.todoBtns}>
                  <StyledButton id={todo.id} onClick={props.onFinished}>
                    {todo.isDone ? "취소" : "완료"}
                  </StyledButton>
                  <StyledButton id={todo.id} onClick={props.onDelete}>
                    삭제
                  </StyledButton>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
