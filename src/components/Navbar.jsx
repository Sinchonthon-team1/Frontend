import styled from "styled-components";
import Logo from "../assets/images/text-logo.webp";
import Profile from "../assets/images/profile.webp";
import Good from "../assets/images/good.webp";
import SmallButton from "./SmallButton";
import { useNavigate } from "react-router-dom";

const NavHeader = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.headline1};
  color: ${(props) => props.theme.colors.main};
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px 12px 64px;
  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .logo {
    display: flex;
    width: 125.824px;
    height: 34.56px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
  }
  .good {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  span {
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
  }
`;
const Btn = styled.button`
  cursor: pointer;
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.main};
  border: 1px solid var(--Main, #ff108c);
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
`;
const Navbar = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    console.log("로그인 페이지로 이동");
    navigate("/login");
  };
  return (
    <NavHeader>
      <div>
        <img
          src={Logo}
          alt="Cubee Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <div style={{ gap: "4px" }}>
          <img src={Good} alt="Good" className="good" />
          <span>Feedback</span>
        </div>
        <img src={Profile} alt="Profile" className="profile" />
        <Btn onClick={handleButton}>로그인</Btn>
      </div>
    </NavHeader>
  );
};

export default Navbar;
