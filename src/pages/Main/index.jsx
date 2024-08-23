import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RegisterBtn>
        <Circle />
        <Square>경기 등록하기</Square>
      </RegisterBtn>
    </div>
  );
};

export default Main;

const Banner = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.gray20};
`;

const Circle = styled.div`
  position: absolute;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.pink};
  cursor: pointer;
`;

const Square = styled.div`
  position: absolute;
  bottom: 0px;
  width: 384px;
  height: 86px;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const RegisterBtn = styled.div`
  position: relative;
  width: 384px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${Circle}, &:hover ${Square} {
    background-color: ${(props) => props.theme.colors.main};
  }
`;
