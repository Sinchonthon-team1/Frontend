import styled from "styled-components";
import MainButton from "../../components/MainButton";

const UnivCard = () => {
  return (
    <UnivCardWrapper>
      <UnivCircle />
      <UnivSquare>
        <UnivName>멋사대학교</UnivName>
        <UnivScore>171 / 200</UnivScore>
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

const UnivScore = styled.div`
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.blue};
  margin-top: 66px;
  margin-bottom: 72px;
`;
