import styled from "styled-components";

const UnivCard = () => {
  return (
    <UnivCardWrapper>
      <UnivCircle />
      <UnivSquare>멋사대학교</UnivSquare>
    </UnivCardWrapper>
  );
};

export default UnivCard;

const UnivCircle = styled.div`
  position: absolute;
  left: 0px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #c2dbff;
`;

const UnivSquare = styled.div`
  position: absolute;
  right: 0px;
  width: 384px;
  height: 384px;
  background-color: #c2dbff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const UnivCardWrapper = styled.div`
  position: relative;
  width: 446px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
