import styled from "styled-components";
import threeUnivs from "./../../assets/images/Performance/threeUnivs.svg";

const OurTeamInfoCard = () => {
  return (
    <OurTeamInfoWrapper>
      <Square>
        <Title>우리 팀 정보</Title>
        <Contents>
          <LeftSide>
            <MyInfo>
              <p className="myInfo">나의 정보</p>
              <Information>
                <Nickname>
                  <span>ilililil</span>
                </Nickname>
                <Tier>
                  <span>골드</span>
                </Tier>
                <Position>
                  <span>바텀</span>
                </Position>
              </Information>
            </MyInfo>
            <Together>
              <p>지금까지 함께한 학교</p>
              <img src={threeUnivs} alt="threeUnivs" />
            </Together>
          </LeftSide>
          <RightSide>
            <MyInfo>
              <p className="myInfo">팀장 정보</p>
              <Information>
                <Nickname>
                  <span>lolololll</span>
                </Nickname>
                <Tier>
                  <span>다이아</span>
                </Tier>
                <Position>
                  <span>미드</span>
                </Position>
              </Information>
            </MyInfo>
            <MyInfo>
              <p className="teamMateInfo">팀원 정보</p>
              <Information>
                <Nickname>
                  <span>rorororo</span>
                </Nickname>
                <Tier>
                  <span>골드</span>
                </Tier>
                <Position>
                  <span>원딜</span>
                </Position>
              </Information>
              <Information>
                <Nickname>
                  <span>rolollll</span>
                </Nickname>
                <Tier>
                  <span>플레</span>
                </Tier>
                <Position>
                  <span>서폿</span>
                </Position>
              </Information>
              <Information>
                <Nickname>
                  <span>alalalal</span>
                </Nickname>
                <Tier>
                  <span>골드</span>
                </Tier>
                <Position>
                  <span>탑</span>
                </Position>
              </Information>
            </MyInfo>
          </RightSide>
        </Contents>
      </Square>
      <Circle1 />
      <Circle2 />
    </OurTeamInfoWrapper>
  );
};

export default OurTeamInfoCard;

const OurTeamInfoWrapper = styled.div`
  width: 1200px;
  height: 640px;
  position: relative;
`;
const Square = styled.div`
  width: 1200px;
  height: 528px;
  background-color: #fff4f9;
  position: absolute;
  top: 0;
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Circle1 = styled.div`
  background-color: white;
  width: 224px;
  height: 224px;
  position: absolute;
  top: -138px;
  left: 180px;
  border-radius: 50%;
`;
const Circle2 = styled.div`
  background-color: #fff4f9;
  width: 224px;
  height: 224px;
  position: absolute;
  right: 178px;
  bottom: 0;
  border-radius: 50%;
`;
const Title = styled.p`
  ${(props) => props.theme.fontStyles.headline2};
  color: ${(props) => props.theme.colors.main};
  width: 332px;
  text-align: center;
  margin-top: 52px;
  margin-bottom: 26px;
  z-index: 1;
`;
const Contents = styled.div`
  display: flex;
  gap: 88px;
`;
const LeftSide = styled.div`
  width: 492px;
  height: 334px;
  display: flex;
  flex-direction: column;
`;
const RightSide = styled.div`
  width: 492px;
  height: 334px;
  z-index: 1;
`;
const MyInfo = styled.div`
  width: 492px;
  height: 95px;

  .myInfo {
    ${(props) => props.theme.fontStyles.subHead2};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 12px;
  }
  .teamMateInfo {
    ${(props) => props.theme.fontStyles.subHead2};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 12px;
    margin-top: 24px;
  }
`;
const Information = styled.div`
  display: flex;
  & + & {
    margin-top: 8px;
  }
`;
const Nickname = styled.div`
  width: 264px;
  height: 52px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  /* box-shadow: 0 0 0 1px ${(props) => props.theme.colors.gray60} inset; */
  display: flex;
  align-items: center;
  span {
    /* margin-left: 20px; */
    margin: 0 auto;
    ${(props) => props.theme.fontStyles.subHead3Med};
    color: ${(props) => props.theme.colors.gray70};
  }
`;
const Tier = styled.div`
  width: 102px;
  height: 52px;
  margin-left: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  /* box-shadow: 0 0 0 1px ${(props) => props.theme.colors.gray60} inset; */
  display: flex;
  align-items: center;
  span {
    /* margin-left: 20px; */
    margin: 0 auto;
    ${(props) => props.theme.fontStyles.subHead3Med};
    color: ${(props) => props.theme.colors.gray70};
  }
`;
const Position = styled.div`
  width: 102px;
  height: 52px;
  margin-left: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  /* box-shadow: 0 0 0 1px ${(props) => props.theme.colors.gray60} inset; */
  display: flex;
  align-items: center;
  span {
    /* margin-left: 20px; */
    margin: 0 auto;
    ${(props) => props.theme.fontStyles.subHead3Med};
    color: ${(props) => props.theme.colors.gray70};
  }
`;
const Together = styled.div`
  p {
    ${(props) => props.theme.fontStyles.subHead2};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 12px;
    margin-top: 64px;
  }
`;
