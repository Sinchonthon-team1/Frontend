import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Main = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Banner />
      <Board>
        <UnivCard>
          <UnivCircle />
          <UnivSquare>멋사대학교</UnivSquare>
        </UnivCard>
        <GameCard>
          <GameSquare>
            <GameCircle1 />
            <GameCircle2 />
            <GameCircle3 />
          </GameSquare>
          <RegisterBtn>
            <RegisterCircle />
            <RegisterSquare>경기 등록하기</RegisterSquare>
          </RegisterBtn>
        </GameCard>
        <AllUnivCard>
          <AllUnivSquare></AllUnivSquare>
          <AllUnivCircle />
        </AllUnivCard>
      </Board>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.gray20};
`;

const Board = styled.div`
  margin-top: 44px;
  width: 1321px;
  height: 619px;
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;

const UnivCircle = styled.div`
  position: absolute;
  left: 0px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #c2dbff;
`;

const UnivSquare = styled.div`
  position: absolute;
  right: 0px;
  width: 384px;
  height: 384px;
  background-color: #c2dbff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const UnivCard = styled.div`
  position: relative;
  width: 446px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameCard = styled.div`
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

const AllUnivCard = styled.div`
  position: relative;
  width: 443px;
  height: 619px;
`;

const AllUnivSquare = styled.div`
  position: absolute;
  left: 0px;
  width: 384px;
  height: 619px;
  background-color: #ffe7bf;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const AllUnivCircle = styled.div`
  position: absolute;
  right: 0px;
  bottom: 130px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #ffe7bf;
  cursor: pointer;
`;
