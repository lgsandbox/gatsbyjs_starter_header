import styled from "styled-components";

export const Button = styled.button`
    
    border-radius: 50px;
    border-color: green ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 13px 30px;
    background-color: ${({ theme }) => theme.colors.buttonbg};
    color: ${({ theme }) => theme.colors.buttoncolor};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

`