import styled from "styled-components";
import Logo from "../assets/images/text-logo.webp";
import Profile from "../assets/images/profile.webp";
import Good from "../assets/images/good.webp";
import SmallButton from "./SmallButton";

const NavHeader = styled.nav`
  z-index: 100;
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
  }
  .good {
    display: flex;
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
  }
  span {
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
  }
`;

const Navbar = () => {
  return (
    <NavHeader>
      <div>
        <img src={Logo} alt="Cubee Logo" className="logo" />
      </div>
      <div>
        <div style={{'gap': '4px'}}>
          <img src={Good} alt="Good" className="good"/>
          <span>Feedback</span>
        </div>
        <img src={Profile} alt="Profile" className="profile" />
        <SmallButton>로그인</SmallButton>
      </div>
    </NavHeader>
  );
};

export default Navbar;
