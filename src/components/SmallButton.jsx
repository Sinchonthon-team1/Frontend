import styled from "styled-components";

const Btn = styled.button`
    cursor: pointer;
    ${(props) => props.theme.fontStyles.body2Bold};
    color: ${(props) => props.theme.colors.main};
    border: 1px solid var(--Main, #FF108C);
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



const Button = ({ children, handleButton }) => {

    return <Btn onClick={handleButton}>{children}</Btn>;
    
};

export default Button;