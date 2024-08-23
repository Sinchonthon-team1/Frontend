import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GameCard = () => {
  const nav = useNavigate();

  return (
    <GameCardWrapper>
      <GameSquare>
        <GameCircle1 />
        <GameCircle2 />
        <GameCircle3 />
        <GameContents>
          <Top>
            <Today>Today</Today>
            <MoreBtn onClick={()=>nav("/game-collection")}>더보기</MoreBtn>
          </Top>
          <Section>
            <TodayDate>08/23</TodayDate>
            <UnivList>
              <UnivItem>
                <TeamName>홍대가짱이야</TeamName>
                <GameTime>15:00</GameTime>
              </UnivItem>
              <UnivItem>
                <TeamName>연대가쥐리지</TeamName>
                <GameTime>16:40</GameTime>
              </UnivItem>
              <UnivItem>
                <TeamName>이대다이아</TeamName>
                <GameTime>19:20</GameTime>
              </UnivItem>
              <UnivItem>
                <TeamName>서강마스터</TeamName>
                <GameTime>19:50</GameTime>
              </UnivItem>
              <UnivItem>
                <TeamName>최강홍홍</TeamName>
                <GameTime>22:00</GameTime>
              </UnivItem>
            </UnivList>
          </Section>
        </GameContents>
      </GameSquare>
      <RegisterBtn>
        <RegisterCircle />
        <RegisterSquare onClick={() => nav("/gameRegister")}>
          경기 등록하기
        </RegisterSquare>
      </RegisterBtn>
    </GameCardWrapper>
  );
};

export default GameCard;

const Top = styled.div`
  display: flex;
  width: 336px;
  height: 54px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const GameContents = styled.div`
  margin: 126px 24px 0;
  display: flex;
  flex-direction: column;
`;

const Today = styled.p`
  ${(props) => props.theme.fontStyles.headline2};
  color: ${(props) => props.theme.colors.main};
`;
const MoreBtn = styled.div`
  width: 80px;
  height: 31px;
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.main};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.main} inset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 28px;
  &:hover {
    background: rgba(255, 16, 140, 0.25);
  }
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  width: 336px;
  height: 152px;
`;

const TodayDate = styled.div`
  ${(props) => props.theme.fontStyles.subHead1};
  color: ${(props) => props.theme.colors.main};
`;

const UnivList = styled.ul`
  margin-left: 22px;
  width: 244px;
`;

const UnivItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: 18px;
  &::before {
    content: "•";
    color: ${(props) => props.theme.colors.main};
    position: absolute;
    left: -18px;
    top: 6px;
  }
  & + & {
    margin-top: 8px;
  }
`;

const TeamName = styled.span`
  ${(props) => props.theme.fontStyles.body1Bold};
  color: ${(props) => props.theme.colors.gray100};
  text-align: center;
`;

const GameTime = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  text-align: center;
`;
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
  left: 130px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const GameCircle3 = styled.div`
  position: absolute;
  bottom: -89px;
  left: 116px;
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
