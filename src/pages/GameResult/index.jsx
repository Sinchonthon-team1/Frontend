import styled from "styled-components";
import Navbar from "../../components/Navbar";
import SmallButton from "../../components/SmallButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    border-radius: 28px;
    gap: 16px;
`;

const GameContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 70%;
    height: 100%;
    border: 1px solid pink;
    padding: 8px;
    border-radius: 28px;
    ul.content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li.list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 24px 16px;
        border-radius: 28px;
        border-top: 1px solid ${(props) => props.theme.colors.gray20};
        background-color: ${(props) => props.theme.colors.white};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

`;
const TeamProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 40%;
    padding: 12px 16px;
    gap: 8px;
    border-top: 1px solid ${(props) => props.theme.colors.gray20};
    border-radius: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => props.theme.colors.white};


    span {
        display: flex;
        ${(props) => props.theme.fontStyles.body2Reg};
        color: ${(props) => props.theme.colors.gray80};
    }


`;
const TeamGrade = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 60%;
    padding: 12px 16px;

    gap: 8px;
    border-top: 1px solid ${(props) => props.theme.colors.gray20};
    border-radius: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => props.theme.colors.white};
    span {
        display: flex;
        ${(props) => props.theme.fontStyles.body2Reg};
        color: ${(props) => props.theme.colors.gray80};
    }
`;
const Btn = styled.button`
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
    border: 1px solid var(--Main, #FF108C);
    cursor: pointer;
    display: flex;
    width: 100%;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    &:hover {
        background: rgba(255, 16, 140, 0.25);
    }
`;
const BtnMatching = styled.button`
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
    border: 1px solid var(--Main, #FF108C);
    cursor: pointer;
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    &:hover {
        background: rgba(255, 16, 140, 0.25);
    }
`;
const S_Btn = styled.button`
    cursor: pointer;
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
    border: 1px solid var(--Main, #FF108C);
    display: flex;
    width: 105px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    &:hover {
        background: rgba(255, 16, 140, 0.25);
    }
    &.active {
      background: rgba(255, 16, 140, 0.25);
    }
`;
const GameResult = () => {
  const games = [
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '153',
    },
    {'univ1': '연세대학교',
    'univ2': '고려대학교',
    'team1': '멋쟁이사자들',
    'team2': '석원팟',
    'date': '2024/08/24',
    'time': '14:00',
    'grade': '154',
    },
    
  ]
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 5;

  // Calculate the indexes for the current page
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Calculate total pages
  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handleReady = () => {
    alert('준비중입니다.');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    setActive(pathname); // Update active state based on current pathname
  }, []);
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Container>
          <GameNav>
            <S_Btn onClick={()=>navigate("/game")} className={active === "/game" ? "active" : ""}>경기 일정</S_Btn>
            <S_Btn onClick={()=>navigate("/game-result")} className={active === "/game-result" ? "active" : ""}>경기 결과</S_Btn>
          </GameNav>
          <GameMain>
            <GameAside>
              <TeamProfile>
                <span>팀 이름: 멋쟁이사자들</span>
                <span>팀장: 홍길동 / G1 / Top</span>
                <span>팀원: 김철수 / P1 / JunGle</span>
                <span>팀원: 박영희 / P2 / Mid</span>
                <span>팀원: 이영수 / P3 / ADC</span>
                <span>팀원: 최영희 / P4 / Support</span>
              </TeamProfile>
              <TeamGrade>
                <span>평균 점수: 3.5</span>
                <span>승률: 60%</span>
                <span>최근 경기: 2승 1패</span>
                <span>2024/08/24 <br/> 멋쟁이사자들 vs 석원팟 <span>패</span></span>
                <span>2024/08/24 <br/> 멋쟁이사자들 vs 석원팟 <span>패</span></span>
                <span>2024/08/24 <br/> 멋쟁이사자들 vs 석원팟 <span>패</span></span>
                <Btn onClick={handleReady}>팀 경기 결과 더보기</Btn>
              </TeamGrade>
            </GameAside>
            <GameContent>
              <ul className="content">
                {currentGames.map((game, index) => {
                  return (
                    <li key={index} className="list">
                      <span>{game.univ1}({game.team1}) vs {game.univ2}({game.team2})</span>
                      <span>{game.date} {game.time}</span>
                      <span>평균 점수: {game.grade}</span>
                      <BtnMatching onClick={handleReady}>경기 신청하기</BtnMatching>
                    </li>
                  )
                })}
              </ul>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                paginate={paginate}
              />
            </GameContent>
          </GameMain>
        </Container>

      </Wrapper>
    </>
  )
};
const Nav = styled.nav`
  .pagination {
    display: flex;
    list-style: none;
    justify-content: center;
  }
  
  .pagination li {
    margin: 0 5px;
    margin-bottom: 10px;
  }
  
  .pagination li a {
    padding: 8px 12px;
    text-decoration: none;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .pagination li.active a {
    background-color: #f50057;
    color: white;
    border: 1px solid #f50057;
  }
`;
const Pagination = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <a onClick={() => paginate(number)} href="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};


export default GameResult;