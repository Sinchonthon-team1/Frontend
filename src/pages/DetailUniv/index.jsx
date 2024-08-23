import styled from "styled-components";
import Navbar from "../../components/Navbar";
import 홍익 from "../../assets/images/Univ/Hongik.svg";

const DetailUniv = () => {
  return (
    <DetailUnivWrapper>
      <Navbar />
      <ContentsWrapper>
        <Title>홍익대학교</Title>
        <Wrapper>
          <TopWrapper>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="TopContainer">
              <div className="textContainer">
                <Pink>홍익대학교</Pink> 소속 팀은 <Pink>17</Pink>개
                <br />총 <Pink> 52</Pink>번의 리그 중,<Pink> 41</Pink>회의 승리,
                <Pink> 11</Pink>회 패배했어요
                <br />
                <Pink>28</Pink>개의 대학 중 <Pink>6</Pink>위예요
              </div>
              <div className="insideContainer">
                나와는 <Pink>2</Pink>번의 리그를 함께했어요
              </div>
            </div>
          </TopWrapper>
          <div className="textBox1">홍익대의 모든 팀을 둘러 보아요!</div>
          <div className="textBox2">
            프로필을 눌러 상세 정보를 확인하고,리그 신청도 할 수 있어요
          </div>
          <ProfileContainer>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                15:00
                <input type="button" value="신청" />
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                15:00
                <input type="button" value="신청" />
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                15:00
                <input type="button" value="신청" />
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="university">
              <img src={홍익} alt="홍익" />
              <div>럭키와우잖앙</div>
              <div>
                15:00
                <input type="button" value="신청" />
              </div>
            </div>
          </ProfileContainer>
        </Wrapper>
      </ContentsWrapper>
    </DetailUnivWrapper>
  );
};

export default DetailUniv;
const Pink = styled.span`
  color: #ff108c;
  text-align: center;
  font-family: "NanumSquare Neo OTF";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
`;

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
  .textBox1 {
    color: ${(props) => props.theme.colors.main};
    ${(props) => props.theme.fontStyles.headline2};
    margin-bottom: 10px;
  }
  .textBox2 {
    ${(props) => props.theme.fontStyles.subHead2};
    margin-bottom: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  margin-top: 126px;
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
`;
const TopWrapper = styled.div`
  width: 1289px;
  height: 365px;
  position: relative;
  .circle1 {
    width: 124px;
    height: 123px;
    border-radius: 100%;
    background-color: #fff4f9;
    position: absolute;
    top: 0%;
    left: 40%;
  }
  .circle2 {
    width: 124px;
    height: 123px;
    border-radius: 100%;
    background-color: #fff4f9;
    position: absolute;
    left: 0%;
    top: 30%;
  }
  .circle3 {
    width: 124px;
    height: 123px;
    border-radius: 100%;
    background-color: #fff4f9;
    position: absolute;
    bottom: 0%;
    left: 70%;
  }
  .TopContainer {
    width: 1188.099px;
    height: 240px;
    border-radius: 31.749px;
    background-color: #fff4f9;
    position: absolute;
    top: 17%;
    left: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${(props) => props.theme.fontStyles.subHead1};
  }
  .textContainer {
    ${(props) => props.theme.fontStyles.subHead1};
  }
  .insideContainer {
    width: 451.256px;
    height: 200px;
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    ${(props) => props.theme.fontStyles.subHead1};
    line-height: 200px;
  }
`;
const ProfileContainer = styled.div`
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
  input {
    width: 33.231px;
    height: 24px;
    border-radius: 3.692px;
    border: 0.462px solid #6b7276;
    background: #fafafb;
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 11.077px */
    margin-left: 5px;
  }
`;
