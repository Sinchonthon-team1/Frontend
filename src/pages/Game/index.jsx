import styled from "styled-components";
import Navbar from "../../components/Navbar";
import SmallButton from "../../components/SmallButton";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    margin-top: 12px;
`;
const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1080px;
    height: 100%;
    padding: 10px;
    gap: 16px;
`;
const GameNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 50px;
    border-radius: 28px;
`;
const GameMain = styled.main`
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    height: 100%;
    gap: 16px;
`;
const GameAside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    border: 1px solid black;
    border-radius: 28px;
`;

const GameContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 70%;
    height: 100%;
    border: 1px solid pink;
    padding: 16px;
    border-radius: 28px;

`;
const TeamProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    border: 1px solid green;
    border-radius: 28px;


`;
const TeamGrade = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    border: 1px solid blue;
    border-radius: 28px;

`;
const Game = () => {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Container>
          <GameNav>
            <SmallButton>경기 일정</SmallButton>
            <SmallButton>경기 결과</SmallButton>
          </GameNav>
          <GameMain>
            <GameAside>
              <TeamProfile>
                <span>팀 이름: 멋쟁이사자들</span>
                <span>팀장: 홍길동</span>
                <span>팀원: 홍길동, 김철수, 박영희</span>
              </TeamProfile>
              <TeamGrade>

              </TeamGrade>
            </GameAside>
            <GameContent>

            </GameContent>
          </GameMain>
        </Container>

      </Wrapper>
    </>
  )
};

export default Game;