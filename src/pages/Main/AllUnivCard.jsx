import styled from "styled-components";

const AllUnivCard = () => {
  return (
    <AllUnivCardWrapper>
      <AllUnivSquare></AllUnivSquare>
      <AllUnivCircle />
    </AllUnivCardWrapper>
  );
};

export default AllUnivCard;

const AllUnivCardWrapper = styled.div`
  position: relative;
  width: 443px;
  height: 619px;
`;

const AllUnivSquare = styled.div`
  position: absolute;
  left: 0px;
  width: 384px;
  height: 619px;
  background-color: #ffe7bf;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.subHead1};
`;

const AllUnivCircle = styled.div`
  position: absolute;
  right: 0px;
  bottom: 130px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #ffe7bf;
  cursor: pointer;
`;
