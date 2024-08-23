import styled from "styled-components";

const MainButton = () => {
  return (
    <div>
      <Button>팀 생성하기</Button>
    </div>
  );
};

export default MainButton;

const Button = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.main};
  width: 352px;
  height: 64px;
`;
