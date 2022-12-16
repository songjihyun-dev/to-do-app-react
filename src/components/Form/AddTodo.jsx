export const AddTodo = (props) => {
  const addTodoHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    event.target.reset();
  };
};
