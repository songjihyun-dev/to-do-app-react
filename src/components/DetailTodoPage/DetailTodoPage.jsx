import { StyledButton } from "../../UI/Button";
import { Link } from "react-router-dom";

export const DetailTodoPage = ({ location }) => {
  console.log(location.state);
  return (
    <div>
      <p>아이디</p>
      <h1>제목</h1>
      <div>내용</div>
      <StyledButton>
        <Link to="/">이전으로</Link>
      </StyledButton>
    </div>
  );
};
