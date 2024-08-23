import styled from "styled-components";

const UnivPFCard = () => {
  return (
    <UnivPFWrapper>
      <Square>
        <Title>우리 학교 실적</Title>
        <Detail>
          <Line>
            <Blue>멋사대학교 </Blue> 소속 팀은 <Blue> 17</Blue> 개
          </Line>
          <Line>
            총 <Blue>52</Blue> 번의 리그 중,
          </Line>
          <Line>
            <Blue>41</Blue> 회 승리, <Blue>11</Blue> 회 패배했어요
          </Line>
          <Line>
            <Blue>28</Blue> 개의 대학 중 <Blue>6</Blue> 위예요
          </Line>
        </Detail>
      </Square>
      <Circle1 />
      <Circle2 />
    </UnivPFWrapper>
  );
};
export default UnivPFCard;

const UnivPFWrapper = styled.div`
  width: 671px;
  height: 612px;
  position: relative;
`;

const Square = styled.div`
  z-index: 1;
  position: absolute;
  width: 588px;
  height: 530px;
  background-color: #daeaff;
  top: 0;
  right: 0;
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle1 = styled.div`
  position: absolute;
  width: 166px;
  height: 166px;
  top: 104px;
  left: 0;
  background-color: #daeaff;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  position: absolute;
  width: 166px;
  height: 166px;
  background-color: #daeaff;
  border-radius: 50%;
  z-index: 2;
  bottom: 0;
  right: 211px;
`;

const Title = styled.p`
  ${(props) => props.theme.fontStyles.headline2};
  color: ${(props) => props.theme.colors.blue};
  width: 332px;
  text-align: center;
  margin-top: 52px;
  margin-bottom: 68px;
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

const Blue = styled.span`
  ${(props) => props.theme.fontStyles.headline3};
  color: ${(props) => props.theme.colors.blue};
`;
