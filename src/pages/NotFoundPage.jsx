import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>없는 페이지입니다.</p>
      <Link to="/">
        <button>Main으로 가기 !</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
