import styled from "styled-components";
import Navbar from "../../components/Navbar";
import 고려 from "../../assets/images/Univ/Korea.svg";
import 홍익 from "../../assets/images/Univ/Hongik.svg";
import 건국 from "../../assets/images/Univ/Konkuk.svg";
import 서강 from "../../assets/images/Univ/Sogang.svg";
import 이화 from "../../assets/images/Univ/Ewha.svg";
import 서울 from "../../assets/images/Univ/Seoul.svg";
import 성균 from "../../assets/images/Univ/Sungwan.svg";
import 연세 from "../../assets/images/Univ/Yonsei.svg";
import 한양 from "../../assets/images/Univ/Hanyang.svg";
import SortDropdown from "../Univ/Dropdown";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Univ = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Title>모든 대학 모아보기</Title>
        <SearchContainer>
          <SortDropdown />
          <input type="text" placeholder="검색어를 입력해 주세요" />
          <Search className="search-icon" />
        </SearchContainer>
        <Univs>
          <div className="university">
            <img src={고려} alt="고려" />
            <div>고려대학교</div>
          </div>
          <div className="university">
            <img src={홍익} alt="홍익" />
            <div>홍익대학교</div>
          </div>
          <div className="university">
            <img src={건국} alt="건국" />
            <div>건국대학교</div>
          </div>
          <div className="university">
            <img src={서강} alt="서강" />
            <div>서강대학교</div>
          </div>
          <div className="university">
            <img src={이화} alt="이화" />
            <div>이화여자대학교</div>
          </div>
          <div className="university">
            <img src={서울} alt="서울" />
            <div>서울대학교</div>
          </div>
          <div className="university">
            <img src={성균} alt="성균" />
            <div>성균대학교</div>
          </div>
          <div className="university">
            <img src={연세} alt="연세" />
            <div>연세대학교</div>
          </div>
          <div className="university">
            <img src={한양} alt="한양" />
            <div>한양대학교</div>
          </div>
        </Univs>
      </StyledContainer>
    </>
  );
};

export default Univ;

// 스타일드 컴포넌트 정의
const StyledContainer = styled.div`
  width: 1500px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 30px;
  margin-left: 180px;
`;
const SearchContainer = styled.div`
  align-items: center;
  margin-left: 800px;
  display: flex;
  margin-bottom: 40px;

  input {
    width: 432px;
    height: 52px;
    border-radius: 8px;
    border: 1px solid #6b7276;
    background: #fafafb;
    ${(props) => props.theme.fontStyles.subHead3Med};
    padding-left: 20px;
  }
  .search-icon {
    width: 38px;
    height: 38px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Univs = styled.div`
  width: 866px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .university {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    ${(props) => props.theme.fontStyles.subHead1};
  }
`;
