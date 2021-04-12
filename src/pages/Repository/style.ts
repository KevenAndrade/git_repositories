import styled, { css } from 'styled-components';

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
