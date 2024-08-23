import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Main = () => {
  return (
    <div>
        <Navbar/>
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
