import styled from "styled-components";
import Navbar from "../../components/Navbar";

const DetailUniv = () => {
  return (
    <DetailUnivWrapper>
      <Navbar />
      <ContentsWrapper>
        <Title>홍익대학교</Title>
      </ContentsWrapper>
    </DetailUnivWrapper>
  );
};

export default DetailUniv;

const DetailUnivWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentsWrapper = styled.div`
  width: 1257px;
  height: 365px;
`;
const Title = styled.p`
  margin-top: 126px;
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
`;
