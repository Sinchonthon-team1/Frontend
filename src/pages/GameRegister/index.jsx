import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import HomeCalendar from "../../components/Calendar/Calendar";

const GameRegister = () => {
  const [teamName, setTeamName] = useState("");
  const [teamScore, setTeamScore] = useState("");
  const [univName, setUnivName] = useState("");
  const [chatLink, setChatLink] = useState("");

  const isFormValid = () => {
    return teamName && teamScore && univName && chatLink;
  };

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Title>경기 등록하기</Title>
        <Wrapper>
          <NameWrapper>
            <div className="circle1"></div>
            <NameContainer>
              <div className="insideWrapper">
                <TeamName>
                  <Subtitle>팀 이름</Subtitle>
                  <div className="teamname">
                    <input
                      className="teamnameType"
                      type="text"
                      placeholder="소속된 팀 이름을 입력해 주세요"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </div>
                </TeamName>
                <TeamScore>
                  <Subtitle>팀 점수</Subtitle>
                  <div className="teamname">
                    <input
                      className="teamnameType"
                      type="text"
                      placeholder="소속된 팀의 점수를 입력해 주세요"
                      value={teamScore}
                      onChange={(e) => setTeamScore(e.target.value)}
                    />
                  </div>
                </TeamScore>
                <UnivName>
                  <Subtitle>대학명</Subtitle>
                  <div className="teamname">
                    <input
                      className="teamnameType"
                      type="text"
                      placeholder="소속 대학을 입력해 주세요"
                      value={univName}
                      onChange={(e) => setUnivName(e.target.value)}
                    />
                  </div>
                </UnivName>
                <Chat>
                  <Subtitle>오픈채팅방 링크</Subtitle>
                  <div className="teamname">
                    <input
                      className="teamnameType"
                      type="text"
                      placeholder="오픈채팅방 링크를 입력해 주세요"
                      value={chatLink}
                      onChange={(e) => setChatLink(e.target.value)}
                    />
                  </div>
                </Chat>
              </div>
            </NameContainer>
          </NameWrapper>
          <InfoWrapper>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <InfoContainer>
              <div className="insideWrapper">
                <Subtitle>경기 정보 선택</Subtitle>
                <HomeCalendar />
              </div>
            </InfoContainer>
          </InfoWrapper>
        </Wrapper>
        <input
          className="submitButton"
          type="submit"
          value="완료"
          disabled={!isFormValid()}
          style={{ marginTop: "64px", marginBottom: "169px" }}
        />
      </StyledContainer>
    </>
  );
};

export default GameRegister;

// 스타일드 컴포넌트 정의
const StyledContainer = styled.div`
  width: 1500px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .submitButton {
    width: 358px;
    height: 56px;
    border-radius: 28px;
    border: none;
    ${(props) => props.theme.fontStyles.subHead3Bold};
    margin-top: 30px;
    align-self: center;
    cursor: pointer;
    background-color: ${(props) =>
      props.disabled ? "#ccc" : props.theme.colors.primary};

    color: ${(props) => (props.disabled ? "#666" : "#BFC2C8")};
  }
`;
const NameWrapper = styled.div`
  width: 686px;
  height: 373px;
  position: relative;
  margin-left: 100px;
  margin-top: 70px;
  .circle1 {
    width: 166px;
    height: 166px;
    background-color: #fff4f9;
    border-radius: 100%;
    z-index: -100;
    position: absolute;
    left: 10px;
    top: 30%;
  }
`;
const Title = styled.div`
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 30px;
  margin-left: 180px;
`;
const Subtitle = styled.div`
  ${(props) => props.theme.fontStyles.subHead2};
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NameContainer = styled.div`
  width: 588px;
  height: 528px;
  background-color: #fff4f9;
  border-radius: 31.75px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .teamnameType {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }

  button {
    margin-left: 10px;
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const UnivName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .teamnameType {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }
`;
const TeamScore = styled.div`
  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .teamnameType {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }
`;
const Chat = styled.div`
  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .teamnameType {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }
`;
const InfoWrapper = styled.div`
  width: 683px;
  height: 640px;
  position: relative;
  margin-left: 20px;
  .circle2 {
    width: 166px;
    height: 166px;
    background-color: #fff9dc;
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 45%;
    z-index: -100;
  }
  .circle3 {
    width: 166px;
    height: 166px;
    background-color: #fff9dc;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 30%;
    z-index: -100;
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  background-color: #fff9dc;
  bottom: 0;
  width: 594.878px;
  height: 570px;
  border-radius: 28.126px;
  display: flex;
  justify-content: center;
  align-items: center;

  .insideWrapper {
    margin-top: 60px;
  }
  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .nickname {
    width: 264px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }
  .tear,
  .position {
    width: 102px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
    text-align: center;
  }
  .teamLeader {
    margin-bottom: 30px;
  }
  .teamMember {
    div {
      margin-bottom: 15px;
    }
  }
  input {
    margin-right: 15px;
  }
`;
