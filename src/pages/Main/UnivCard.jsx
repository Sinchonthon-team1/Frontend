import styled from "styled-components";
import MainButton from "../../components/MainButton";

const UnivCard = () => {
  return (
    <UnivCardWrapper>
      <UnivCircle />
      <UnivSquare>
        <UnivName>멋사대학교</UnivName>
        <TeamName>팀이름팀이름팀이름팀이름</TeamName>
        <UnivScore>
          <span className="ourTeam">171</span>
          <span className="total">/ 200</span>
          <span className="scoreText">점</span>
        </UnivScore>
        <Rank>
          멋사대학교에서<span className="rankNum">5</span>위
        </Rank>
        <MainButton>더보기</MainButton>
      </UnivSquare>
    </UnivCardWrapper>
  );
};

export default UnivCard;

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
  ${(props) => props.theme.fontStyles.subHead1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnivCardWrapper = styled.div`
  position: relative;
  width: 446px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UnivName = styled.div`
  ${(props) => props.theme.fontStyles.headline2};
  color: ${(props) => props.theme.colors.black};
  margin-top: 36px;
`;

const TeamName = styled.div`
  ${(props) => props.theme.fontStyles.subHead3Med};
  color: ${(props) => props.theme.colors.gray70};
  margin-top: 8px;
`;

const UnivScore = styled.div`
  display: flex;
  align-items: center;
  width: 234px;
  height: 72px;
  margin-top: 36px;
  .ourTeam {
    ${(props) => props.theme.fontStyles.headline1};
    color: ${(props) => props.theme.colors.blue};
    margin-right: 12px;
  }
  .total {
    ${(props) => props.theme.fontStyles.headline2};
    color: #67a5ff;
    margin-right: 4px;
  }
  .scoreText {
    ${(props) => props.theme.fontStyles.headline3};
    color: #67a5ff;
  }
`;

const Rank = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  ${(props) => props.theme.fontStyles.subHead3Med};
  color: ${(props) => props.theme.colors.gray70};
  span {
    margin-left: 4px;
    ${(props) => props.theme.fontStyles.subHead3Bold};
    color: ${(props) => props.theme.colors.blue};
  }
`;
