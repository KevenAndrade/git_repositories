import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FromProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 45px;
    color: #fff;

    max-width: 450px;
    line-height: 56px;
    margin-top: 30px;
`;

export const Form = styled.form<FromProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        ${(props) =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #2783f0;
        border: 0;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#2783f0')};
        }
    }
`;
export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        border: 0;
        border-radius: 5px;
        background: #fff;
        width: 100%;
        padding: 18px;
        text-decoration: none;
        display: block;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 10px;
        }

        &:hover {
            background: ${shade(0.2, '#fff')};
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;
            flex: 1;

            strong {
                font-weight: bold;
                font-size: 20px;
                color: #3a3a3a;
            }
            p {
                margin-top: 4px;
                font-size: 15px;
                color: #3a3a3a;
            }
        }
        svg {
            margin-left: auto;
            color: #2783f0;
        }
    }
`;
