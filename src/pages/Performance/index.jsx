import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Performance = () => {
  return (
    <PerformanceWrapper>
      <Navbar />
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
