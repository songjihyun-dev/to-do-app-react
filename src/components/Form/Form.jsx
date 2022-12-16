import { useState } from "react";
import styles from "./Form.module.css";
import { StyledButton } from "../../UI/Button";

export const Form = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (todoTitle.trim().length < 1 && todoContent.trim().length < 1) {
      alert("제목과 내용은 1글자 이상 입력해주세요.");
    } else if (todoTitle.trim().length < 1) {
      alert("제목을 입력해주세요.");
      return;
    } else if (todoContent.trim().length < 1) {
      alert("내용을 입력해주세요.");
      return;
    } else {
      props.onAddTodo(todoTitle, todoContent);
      setTodoTitle("");
      setTodoContent("");
    }
  };

  const onTitleEntered = (event) => {
    setTodoTitle(event.target.value);
  };

  const onContentEntered = (event) => {
    setTodoContent(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <input
        type="text"
        className={styles.input}
        placeholder="제목을 입력해 주세요."
        onChange={onTitleEntered}
        value={todoTitle}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="할 일을 입력해주세요."
        onChange={onContentEntered}
        value={todoContent}
      />
      <StyledButton>추가하기</StyledButton>
      <p className="error-message"></p>
    </form>
  );
};
