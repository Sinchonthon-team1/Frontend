import styled from "styled-components";

const OurTeamPFCard = () => {
  return (
    <OurTeamPFWrapper>
      <Square>
        <Title>우리 팀 실적</Title>
        <Detail>
          <Line>
            총 <Yellow>10</Yellow> 번의 리그 중,
          </Line>
          <Line>
            <Yellow>7</Yellow> 회 승리, <Yellow>3</Yellow> 회 패배했어요
          </Line>
          <Line>
            <Yellow>79</Yellow> 개의 팀 중 <Yellow>20</Yellow> 위
          </Line>
          <Line>
            <Yellow>멋사대학교</Yellow> 에서 <Yellow>5</Yellow> 위예요
          </Line>
        </Detail>
      </Square>
      <Circle1 />
      <Circle2 />
    </OurTeamPFWrapper>
  );
};
export default OurTeamPFCard;

const OurTeamPFWrapper = styled.div`
  width: 683px;
  height: 618px;
  margin-top: -85px;
  margin-left: 17px;
  position: relative;
`;
const Square = styled.div`
  position: absolute;
  width: 594.8px;
  height: 530px;
  background-color: #fff1d9;
  bottom: 0;
  left: 0;
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle1 = styled.div`
  position: absolute;
  width: 174.4px;
  height: 174.4px;
  top: 0;
  left: 214.6px;
  background-color: #fff1d9;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  position: absolute;
  width: 174.4px;
  height: 174.4px;
  background-color: #fff1d9;
  border-radius: 50%;
  z-index: 2;
  bottom: 102.6px;
  right: 0;
`;

const Title = styled.p`
  ${(props) => props.theme.fontStyles.headline2};
  color: ${(props) => props.theme.colors.orange};
  width: 332px;
  text-align: center;
  margin-top: 52px;
  margin-bottom: 68px;
  z-index: 1;
`;

const Detail = styled.div`
  width: 332px;
  height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.span`
  text-align: center;
  ${(props) => props.theme.fontStyles.subHead1};
  color: ${(props) => props.theme.colors.gray100};
`;

const Yellow = styled.span`
  ${(props) => props.theme.fontStyles.headline3};
  color: ${(props) => props.theme.colors.orange};
`;
