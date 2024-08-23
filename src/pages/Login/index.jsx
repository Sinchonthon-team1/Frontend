import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/images/text-logo.webp";
import { useState } from "react";
import { loginApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin-top: 64px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 520px;
  height: 400px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  align-self: stretch;
  img {
    display: flex;
    width: 324.026px;
    height: 89px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  gap: 50px;
  align-self: stretch;
`;
const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  gap: 28px;

  label {
    width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px;
    span {
      display: flex;
      ${(props) => props.theme.fontStyles.subHead2};
      color: ${(props) => props.theme.colors.blac};
      width: 432px;
      justify-content: flex-start;
    }
    input {
      display: flex;
      width: 432px;
      height: 52px;
      padding: 12px 20px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.gray60};
      background-color: ${(props) => props.theme.colors.gray5};
      &:focus {
        border: 1px solid ${(props) => props.theme.colors.main};
      }
    }
  }
`;
const Button = styled.button`
  display: flex;
  width: 358px;
  height: 56px;
  padding: 16px 96px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 28px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray10};
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.body1Bold};
  &:hover {
    background-color: ${(props) => props.theme.colors.gray20};
  }
`;
const SignUpFooter = styled.div`
  margin-top: -20px;
  width: 520px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.captionMed};
  gap: 4px;
  a {
    text-decoration: underline;
  }
`;

const Login = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await loginApi(formData.email, formData.password);
    alert("로그인 성공");
    nav("/");
  };
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <LoginForm>
            <img src={Logo} alt="text-logo" />
            <InputContainer>
              <Area>
                <label htmlFor="">
                  <span>학교 메일 주소</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="주소를 입력해주세요"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label htmlFor="">
                  <span>비밀번호</span>

                  <input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </Area>
              <Button onClick={handleSubmit}>완료</Button>
            </InputContainer>
            <SignUpFooter>
              <span>아직 회원이 아니신가요?</span>
              <a href="/signup">회원가입하기</a>
            </SignUpFooter>
          </LoginForm>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
