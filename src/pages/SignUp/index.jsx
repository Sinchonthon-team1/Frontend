import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/images/text-logo.webp";
import Warning from "../../assets/images/warning_circle.webp";

import { useState } from "react";
import { registerApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [isGameInfo, setIsGameInfo] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        school: '',
        email: '',
        password: '',
        user_name: '',
        tag_line: '',
        tier: '',
        position: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleNext = () => {
        setIsGameInfo(true);
    }
    const handleNicknameChange = (e) => {
        const nickname = e.target.value;
        const [user_name, tag_line = ''] = nickname.split('#');
        setFormData({
            ...formData,
            user_name: user_name.trim(),
            tag_line: tag_line.trim(),
        });
    };
    const handleSubmit = async () => {
        // Send API request with formData
        setIsGameInfo(false);
        const response = await registerApi(
            formData.email,
            formData.password,
            formData.name,
            formData.age,
            formData.school,
            formData.user_name,
            formData.tag_line,
            formData.tier,
            formData.position,
        );
        alert("회원가입이 완료되었습니다.");
        navigate('/login');
    };
    
    return (
        <>
        <Navbar/>
        <Wrapper>
            <Container>
                {!isGameInfo ? (
                    <SignUpForm>
                        <img src={Logo} alt="text-logo" />
                        <InputContainer>
                            <Area>
                                <label htmlFor="">
                                    <InputSpan>
                                        <div>
                                            <span>이름</span>
                                            <input
                                            id="name"
                                            type="text"
                                            placeholder="이름"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="name"
                                            />
                                        </div>
                                        <div>
                                            <span>나이</span>
                                            <input
                                            id="age"
                                            type="integer"
                                            placeholder="나이"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            required
                                            className="age"
                                            />
                                        </div>
                                        {/* <div>
                                            <span>대학교</span>
                                            <input
                                            id="school"
                                            type="text"
                                            placeholder="대학교"
                                            value={formData.school}
                                            onChange={handleInputChange}
                                            required
                                            className="univ"
                                            />

                                        </div> */}
                                    </InputSpan>
                                </label>
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
                                    // onChange={(e) => setPassword(e.target.value)}
                                    required
                                    />
                                </label>
                            </Area>
                            <Button onClick={handleNext}>다음</Button>
                        </InputContainer>
                    </SignUpForm>
                ) : (
                    <GameInfoForm>
                        <img src={Logo} alt="text-logo" />
                        <InputContainer>
                            <Area>
                                <label htmlFor="">
                                    <span>게임 닉네임</span>
                                    <div style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center',
                                    }}>

                                        <input
                                        id="nickname"
                                        type="text"
                                        placeholder="게임 닉네임을 입력하세요. (ex. lionlike#sinchon24)"
                                        value={`${formData.user_name}${formData.tag_line ? `#${formData.tag_line}` : ''}`}
                                        onChange={handleNicknameChange}
                                        required
                                        style={{
                                            'width': '362px',
                                        }}
                                        />
                                        <button>확인</button>
                                    </div>
                                    <span className="warning">
                                        <img src={Warning} alt="warning"></img>
                                        다른 사람의 계정을 사용하는 것이 확인되면 계정이 정지될 수 있어요
                                        </span>
                                </label>
                                <label htmlFor="">
                                    <span>티어</span>
                                    <input
                                    id="tier"
                                    type="text"
                                    placeholder="롤 티어를 입력해주세요. (ex. 플래티넘1)"
                                    value={formData.tier}
                                    onChange={handleInputChange}
                                    required
                                    />
                                    <span>포지션</span>
                                    <input
                                    id="position"
                                    type="text"
                                    placeholder="포지션을 입력해주세요. (ex. TOP)"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    required
                                    />
                                    
                                </label>
                            </Area>
                            <Button onClick={handleSubmit}>완료</Button>
                        </InputContainer>
                    </GameInfoForm>
                )}
                
            </Container>
        </Wrapper>
        </>
    )
  
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 520px;
    height: 500px;
`;
const SignUpForm = styled.form`
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
const GameInfoForm = styled.form`
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
    gap: 10px;

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
        .warning {
            display: flex;
            ${(props) => props.theme.fontStyles.body2Med};
            color: ${(props) => props.theme.colors.main};
            align-items: center;
            gap: 4px;
            img {
                width: 24px;
                height: 24px;
            }
            
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
        button {
            display: flex;
            width: 60px;
            height: 52px;
            padding: 12px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            border: 1px solid ${(props) => props.theme.colors.gray60};
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.gray70};
            cursor: pointer;
            &:hover {
                background-color: ${(props) => props.theme.colors.gray10};
            }
        }
    }
`;
const InputSpan = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 432px;
    gap: 20px;
    align-items: center;
    div {
        width: 100%; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        span {
            display: flex;
            ${(props) => props.theme.fontStyles.subHead2};
            color: ${(props) => props.theme.colors.black};
            width: 72px;
            justify-content: flex-start;
        }
        input {
            width: 100%; 
            padding: 12px 20px;
            
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


export default SignUp;