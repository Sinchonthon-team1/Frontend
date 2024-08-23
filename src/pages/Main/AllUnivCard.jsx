import styled from "styled-components";
import MainButton from "../../components/MainButton";
import univs from "../../assets/images//Main/univs.svg";
import { useNavigate } from "react-router-dom";

const AllUnivCard = () => {
  const nav = useNavigate();

  return (
    <AllUnivCardWrapper>
      <AllUnivSquare>
        <Title>
          참여 대학을
          <br />
          확인해 보세요
        </Title>
        <MoreBtn>더보기</MoreBtn>
        <MakeTeamBtn onClick={() => nav("/team")}>
          <MainButton>팀 생성하기</MainButton>
        </MakeTeamBtn>
        <Puzzle>
          <img src={univs} alt="univs" />
        </Puzzle>
      </AllUnivSquare>
      <AllUnivCircle />
    </AllUnivCardWrapper>
  );
};

export default AllUnivCard;

const AllUnivCardWrapper = styled.div`
  position: relative;
  width: 443px;
  height: 619px;
`;

const AllUnivSquare = styled.div`
  position: absolute;
  left: 0px;
  width: 384px;
  height: 619px;
  background-color: #ffe7bf;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const AllUnivCircle = styled.div`
  position: absolute;
  right: 0px;
  bottom: 130px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #ffe7bf;
`;

const Title = styled.p`
  ${(props) => props.theme.fontStyles.headline3};
  margin-top: 32px;
  margin-left: 20px;
`;

const MakeTeamBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
`;

const MoreBtn = styled.div`
  margin-top: 33px;
  margin-left: 256px;
  width: 80px;
  height: 31px;
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.main};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.main} inset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 28px;
  &:hover {
    background: rgba(255, 16, 140, 0.25);
  }
  cursor: pointer;
`;

const Puzzle = styled.div`
  margin-top: 4px;
  margin-left: 27px;
  width: 330px;
  height: 315px;
  position: relative;
  z-index: 1;
`;
