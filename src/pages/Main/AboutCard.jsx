import styled from "styled-components";

const AllUnivCard = () => {
  return (
    <AboutCardWrapper>
      <AboutSquare>
        <span>
          다양한 학교의 팀들과
          <br />
          맞춰가는 큰 퍼즐, 큐비!
        </span>
      </AboutSquare>
      <AboutCircle />
    </AboutCardWrapper>
  );
};

export default AllUnivCard;

const AboutCardWrapper = styled.div`
  margin-top: 32px;
  margin-left: 59px;
  border-radius: 20px;
  width: 384px;
  height: 203px;
  overflow: hidden;
  position: relative;
`;

const AboutSquare = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  right: 0px;
  width: 384px;
  height: 203px;

  background-color: ${(props) => props.theme.colors.main};
  span {
    margin-top: 32px;
    ${(props) => props.theme.fontStyles.headline3};
    color: ${(props) => props.theme.colors.white};
  }
`;

const AboutCircle = styled.div`
  position: absolute;
  right: 130px;
  bottom: -77px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;
