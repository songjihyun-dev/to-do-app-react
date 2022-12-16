import { createBrowserRouter } from "react-router-dom";
import { DetailTodoPage } from "./components/DetailTodoPage/DetailTodoPage";
import { TodoList } from "./components/TodoLists/TodoList";
import { App } from "./App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <TodoList />,
      },
      {
        path: ":id",
        element: <DetailTodoPage />,
      },
    ],
  },
]);
