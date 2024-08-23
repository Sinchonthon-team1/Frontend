import styled from "styled-components";
import Navbar from "../../components/Navbar";
import UnivCard from "./../Main/UnivCard.jsx";
import GameCard from "./../Main/GameCard.jsx";
import AllUnivCard from "./../Main/AllUnivCard.jsx";
import AboutCard from "./../Main/AboutCard.jsx";

const Main = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Banner />
      <Board>
        <LeftCards>
          <UnivCard />
          <AboutCard />
        </LeftCards>
        <GameCard />
        <AllUnivCard />
      </Board>
    </MainWrapper>
  );
};

export default Main;

const LeftCards = styled.div`
  width: 446px;
  height: 619px;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.gray20};
`;

const Board = styled.div`
  margin-top: 44px;
  width: 1321px;
  height: 619px;
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;
