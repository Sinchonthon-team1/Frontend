import styled from "styled-components";

const Main = () => {
  return (
    <div>
      Main페이지입니다.
      <MainFont>헤드라인 / main</MainFont>
      <SubFont>서브 / blue</SubFont>
      <BodyFont>바디 / sky</BodyFont>
      <CaptionFont>캡션 / yellow</CaptionFont>
    </div>
  );
};

export default Main;

const MainFont = styled.div`
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
`;

const SubFont = styled.div`
  ${(props) => props.theme.fontStyles.subHead1};
  color: ${(props) => props.theme.colors.blue};
`;

const BodyFont = styled.div`
  ${(props) => props.theme.fontStyles.body1Bold};
  color: ${(props) => props.theme.colors.sky};
`;

const CaptionFont = styled.div`
  ${(props) => props.theme.fontStyles.captionBold};
  color: ${(props) => props.theme.colors.yellow};
`;
