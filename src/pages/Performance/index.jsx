import styled from "styled-components";
import Navbar from "../../components/Navbar";
import UnivPFCard from "./UnivPFCard";
import OurTeamPFCard from "./OurTeamPFCard";
import OurTeamInfoCard from "./OurTeamInfoCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Performance = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <PerformanceWrapper>
      <Navbar />
      <PerformanceContainer>
        <TopInfo>
          <UnivTitle>멋사대학교</UnivTitle>
          <TeamName>팀이름팀이름팀이름팀이름</TeamName>
        </TopInfo>
        <TopCards>
          <UnivPFCard />
          <OurTeamPFCard />
        </TopCards>
        <BottomCard>
          <OurTeamInfoCard />
        </BottomCard>
      </PerformanceContainer>
    </PerformanceWrapper>
  );
};

export default Performance;

const PerformanceWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PerformanceContainer = styled.div`
  width: 1371px;
`;

const TopInfo = styled.div`
  height: 72px;
  margin-top: 94px;
  margin-left: 83px;
`;

const UnivTitle = styled.span`
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
  margin-right: 40px;
`;

const TeamName = styled.span`
  ${(props) => props.theme.fontStyles.headline3};
  color: ${(props) => props.theme.colors.gray50};
`;

const TopCards = styled.div`
  display: flex;
  margin-top: 36px;
`;

const BottomCard = styled.div`
  margin-top: -61px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 131px;
`;
