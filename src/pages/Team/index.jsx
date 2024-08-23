import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";

const Team = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const [teamName, setTeamName] = useState("");
  const [univName, setUnivName] = useState("");
  const [teamLeader, setTeamLeader] = useState({
    nickname: "",
    tear: "",
    position: "",
  });
  const [teamMembers, setTeamMembers] = useState([
    { nickname: "", tear: "", position: "" },
    { nickname: "", tear: "", position: "" },
    { nickname: "", tear: "", position: "" },
    { nickname: "", tear: "", position: "" },
  ]);
  const [validationMessage, setValidationMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleTeamNameChange = (event) => {
    if (event.target.value.length <= 12) {
      setTeamName(event.target.value);
      setValidationMessage(""); // 이름을 입력할 때마다 메시지를 초기화
    }
  };

  const handleUnivNameChange = (event) => {
    setUnivName(event.target.value);
  };

  const handleTeamLeaderChange = (event) => {
    setTeamLeader({
      ...teamLeader,
      [event.target.name]: event.target.value,
    });
  };

  const handleTeamMemberChange = (index, event) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index][event.target.name] = event.target.value;
    setTeamMembers(newTeamMembers);
  };

  const handleCheckDuplicate = () => {
    // 예시를 위해 간단한 중복 확인 로직 추가
    const existingTeamNames = ["팀A", "팀B", "팀C"]; // 기존 팀 이름 예시
    if (existingTeamNames.includes(teamName)) {
      setValidationMessage("사용할 수 없는 이름입니다.");
    } else {
      setValidationMessage("사용 가능한 이름입니다.");
    }
  };

  useEffect(() => {
    const allFieldsFilled =
      teamName &&
      univName &&
      teamLeader.nickname &&
      teamLeader.tear &&
      teamLeader.position &&
      teamMembers.every(
        (member) => member.nickname && member.tear && member.position
      );

    setIsSubmitDisabled(!allFieldsFilled);
  }, [teamName, univName, teamLeader, teamMembers]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Title>팀 생성하기</Title>
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
                      placeholder="만들 팀 이름을 입력해 주세요"
                      value={teamName}
                      onChange={handleTeamNameChange}
                    />
                    <button onClick={handleCheckDuplicate}>중복 확인</button>
                  </div>
                  <CharacterCount>{teamName.length}/12</CharacterCount>
                  {validationMessage && (
                    <ValidationMessage>{validationMessage}</ValidationMessage>
                  )}
                </TeamName>
                <UnivName>
                  <Subtitle>대학명</Subtitle>
                  <div className="univname">
                    <input
                      className="univnameType"
                      type="text"
                      placeholder="소속 대학을 입력해 주세요"
                      value={univName}
                      onChange={handleUnivNameChange}
                    />
                  </div>
                </UnivName>
              </div>
            </NameContainer>
          </NameWrapper>
          <InfoWrapper>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <InfoContainer>
              <div className="insideWrapper">
                <div className="teamLeader">
                  <Subtitle>팀장 정보</Subtitle>
                  <div>
                    <input
                      className="nickname"
                      type="text"
                      placeholder="닉네임을 입력해주세요"
                      name="nickname"
                      value={teamLeader.nickname}
                      onChange={handleTeamLeaderChange}
                    />
                    <input
                      className="tear"
                      type="text"
                      placeholder="티어"
                      name="tear"
                      value={teamLeader.tear}
                      onChange={handleTeamLeaderChange}
                    />
                    <input
                      className="position"
                      type="text"
                      placeholder="포지션"
                      name="position"
                      value={teamLeader.position}
                      onChange={handleTeamLeaderChange}
                    />
                  </div>
                </div>

                <div className="teamMember">
                  <Subtitle>팀원 정보</Subtitle>
                  {teamMembers.map((member, index) => (
                    <div key={index}>
                      <input
                        className="nickname"
                        type="text"
                        placeholder="닉네임을 입력해주세요"
                        name="nickname"
                        value={member.nickname}
                        onChange={(e) => handleTeamMemberChange(index, e)}
                      />
                      <input
                        className="tear"
                        type="text"
                        placeholder="티어"
                        name="tear"
                        value={member.tear}
                        onChange={(e) => handleTeamMemberChange(index, e)}
                      />
                      <input
                        className="position"
                        type="text"
                        placeholder="포지션"
                        name="position"
                        value={member.position}
                        onChange={(e) => handleTeamMemberChange(index, e)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </InfoContainer>
          </InfoWrapper>
        </Wrapper>
        <input
          className="submitButton"
          type="submit"
          value="완료"
          disabled={isSubmitDisabled}
          style={{ marginTop: "64px", marginBottom: "169px" }}
        />
      </StyledContainer>
    </>
  );
};

export default Team;

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
    margin-top: 50px;
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
    background-color: #daeaff;
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
  height: 373px;
  background-color: #daeaff;
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
  position: relative; /* 상대 위치 설정 */

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
    ${(props) => props.theme.fontStyles.body1Bold};
    cursor: pointer;
    width: 80px;
    height: 52px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #fafafb;
  }
`;

const UnivName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .univnameType {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    ${(props) => props.theme.fontStyles.body1Bold};
  }
`;

const CharacterCount = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #888;
  margin-left: 400px;
`;

const ValidationMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) =>
    props.children === "사용 가능한 이름입니다." ? "green" : "red"};
  position: absolute; /* 절대 위치 설정 */
  top: 95px; /* 적절한 위치로 조정 */
  left: 0;
  width: 100%;
`;

const InfoWrapper = styled.div`
  width: 683px;
  height: 600px;
  position: relative;
  margin-left: 20px;
  .circle2 {
    width: 166px;
    height: 166px;
    background-color: #fff1d9;
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 45%;
    z-index: -100;
  }
  .circle3 {
    width: 166px;
    height: 166px;
    background-color: #fff1d9;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 30%;
    z-index: -100;
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  background-color: #fff1d9;
  bottom: 0;
  width: 594.878px;
  height: 530px;
  border-radius: 28.126px;
  display: flex;
  justify-content: center;
  align-items: center;

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
