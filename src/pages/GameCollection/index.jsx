import Navbar from "../../components/Navbar";
import styled from "styled-components";

const GameCollection = () => {
  const univlist1 = [
    { univ: "홍익대학교", time: "14:00" },
    { univ: "연세대학교", time: "15:00" },
    { univ: "고려대학교", time: "16:00" },
    { univ: "서강대학교", time: "17:00" },
    { univ: "이화여자대학교", time: "18:00" },
    { univ: "서울대학교", time: "19:00" },
    { univ: "성균관대학교", time: "20:00" },
    { univ: "한양대학교", time: "21:00" },
    { univ: "중앙대학교", time: "22:00" },
    { univ: "경희대학교", time: "23:00" },
    { univ: "홍익대학교", time: "14:00" },
    { univ: "연세대학교", time: "15:00" },
    { univ: "고려대학교", time: "16:00" },
    { univ: "서강대학교", time: "17:00" },
  ];
  const univlist2 = [
    { univ: "홍익대학교", time: "14:00" },
    { univ: "연세대학교", time: "15:00" },
    { univ: "고려대학교", time: "16:00" },
    { univ: "서강대학교", time: "17:00" },
  ];
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <Text>오늘의 경기 모아보기</Text>
          <Main>
            <GameList>
              <CircleNew></CircleNew>
              <TextDate>08/23</TextDate>
              <UnivList>
                {univlist1.map((univ) => (
                  <li>
                    <div className="div">
                      <span className="jeom"></span>
                      <span className="univ">{univ.univ}</span>
                    </div>
                    <span className="time">{univ.time}</span>
                  </li>
                ))}
              </UnivList>
            </GameList>
            <AlertGame>
              <Circle1></Circle1>
              <Circle2></Circle2>
              <TextAsk>
                아직 리그가 결정되지 않은
                <br />
                팀들이 있어요!
                <br />
                오늘이 가기 전에 신청해볼까요?
              </TextAsk>
              <ApplyList>
                {univlist2.map((univ) => (
                  <li>
                    <div className="div">
                      <span className="jeom"></span>
                      <span className="univ">{univ.univ}</span>
                    </div>
                    <span className="time">{univ.time}</span>
                    <button>신청하기</button>
                  </li>
                ))}
              </ApplyList>
            </AlertGame>
          </Main>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 30px;
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1080px;
  height: 90%;
  padding: 10px;
  gap: 16px;
`;
const Text = styled.h1`
  color: ${(props) => props.theme.colors.main};
  ${(props) => props.theme.fontStyles.headline2};
`;
const TextDate = styled.h1`
  color: ${(props) => props.theme.colors.main};
  ${(props) => props.theme.fontStyles.headline3};
`;
const TextAsk = styled.h1`
  color: #ff9f00;
  ${(props) => props.theme.fontStyles.headline3};
  z-index: 100;
`;
const UnivList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 4px 0;
  width: 244px;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    .div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .jeom {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.main};
      ${(props) => props.theme.fontStyles.headline2};
    }
    .univ {
      color: ${(props) => props.theme.colors.gray100};
      ${(props) => props.theme.fontStyles.body1Bold};
    }
    .time {
      color: ${(props) => props.theme.colors.gray60};
      ${(props) => props.theme.fontStyles.body2Med};
    }
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 16px;
`;
const GameList = styled.section`
  width: 50%;
  height: 100%;
  border-radius: 31.749px;
  background: #fff4f9;
  position: relative;
  padding: 48px;
  display: flex;
  gap: 48px;
`;
const AlertGame = styled.section`
  width: 50%;
  height: 70%;
  border-radius: 31.749px;
  background: #fff9dc;
  position: relative;
  padding: 100px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;
`;
const ApplyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 50;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    .div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .jeom {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.main};
      color: #ff9f00;
      ${(props) => props.theme.fontStyles.headline2};
    }
    .univ {
      color: ${(props) => props.theme.colors.gray100};
      ${(props) => props.theme.fontStyles.body1Bold};
    }
    .time {
      color: ${(props) => props.theme.colors.gray60};
      ${(props) => props.theme.fontStyles.body2Med};
    }
    button {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #fbd597;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: #0e0d0e;
      ${(props) => props.theme.fontStyles.body1Bold};
      cursor: pointer;
      &:hover {
        background-color: #fff4f9;
        color: #ff9f00;
      }
    }
  }
`;
const CircleNew = styled.div`
  width: 174.384px;
  height: 160.245px;
  border-radius: 50%;
  background: #fff4f9;
  position: absolute;
  top: 20%;
  left: -15%;
`;
const Circle1 = styled.div`
  width: 174.384px;
  height: 160.245px;
  border-radius: 50%;
  background: #fff9dc;
  position: absolute;
  top: -17%;
  left: 35%;
`;
const Circle2 = styled.div`
  width: 174.384px;
  height: 160.245px;
  border-radius: 50%;
  background: #fff9dc;
  position: absolute;
  bottom: 25%;
  left: 80%;
`;
export default GameCollection;
