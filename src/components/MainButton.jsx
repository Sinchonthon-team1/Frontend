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
  background-color: ${(props) => props.theme.colors.pink};
  display: flex;
  width: 352px;
  height: 64px;
  padding: 13px 103px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  ${(props) => props.theme.fontStyles.subHead1};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.main}; // hover 시에 변경될 색상
    color: white; // hover 시에 변경될 색상
  }
`;
