import styled from "styled-components";

const GameCard = () => {
  return (
    <GameCardWrapper>
      <GameSquare>
        <GameCircle1 />
        <GameCircle2 />
        <GameCircle3 />
      </GameSquare>
      <RegisterBtn>
        <RegisterCircle />
        <RegisterSquare>경기 등록하기</RegisterSquare>
      </RegisterBtn>
    </GameCardWrapper>
  );
};

export default GameCard;

const GameCardWrapper = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
`;

const GameSquare = styled.div`
  position: relative;
  width: 384px;
  height: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray20};
  border-radius: 20px;
  overflow: hidden;
`;

const GameCircle1 = styled.div`
  position: absolute;
  left: -62px;
  bottom: 78px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const GameCircle2 = styled.div`
  position: absolute;
  top: -62px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const GameCircle3 = styled.div`
  position: absolute;
  bottom: -89px;
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const RegisterCircle = styled.div`
  position: absolute;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.pink};
  cursor: pointer;
`;

const RegisterSquare = styled.div`
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
  margin-top: -41px;
  width: 384px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${RegisterCircle}, &:hover ${RegisterSquare} {
    background-color: ${(props) => props.theme.colors.main};
    color: white;
  }
`;
