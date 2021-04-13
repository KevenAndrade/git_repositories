import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    div {
        margin-left: 24px;

        strong {
            font-size: 36px;
            color: #edeaea;
        }

        p {
            font-size: 18px;
            color: #edeaea;
            margin-top: 4px;
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 40px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #edeaea;
            }

            span {
                display: block;
                color: #edeaea;
                margin-top: 4px;
            }
        }
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    color: #fff;

    max-width: 450px;
    line-height: 56px;
    margin-top: 30px;
`;

export const Issues = styled.div`
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
            color: #3a3a3a;
        }
    }
`;
