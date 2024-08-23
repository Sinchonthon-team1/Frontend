import styled from "styled-components";
import Navbar from "../../components/Navbar";
import UnivCard from "./../Main/UnivCard.jsx";
import GameCard from "./../Main/GameCard.jsx";
import AllUnivCard from "./../Main/AllUnivCard.jsx";
import AboutCard from "./../Main/AboutCard.jsx";
import bannerAnimation from "./../../assets/images/Main/sinchonton_Lottieplugin.json";
import Lottie from "react-lottie";

const Main = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Banner>
        <LottieWrapper>
          <Lottie options={defaultOptions} />
        </LottieWrapper>
      </Banner>
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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: bannerAnimation,
  rendererSettings: {
    preserveAspectRatio: "none",
  },
};

const LottieWrapper = styled.div`
  width: 100%;
  margin-bottom: -3.5px;
`;

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
  height: auto;
  background-color: ${(props) => props.theme.colors.main};
`;

const Board = styled.div`
  margin-top: 44px;
  width: 1321px;
  height: 619px;
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;
