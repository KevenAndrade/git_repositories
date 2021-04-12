import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo } from './style';
import logo from '../../assets/github_logo.svg';

interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
                <Link to="/dashboard">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars.githubusercontent.com/u/65917547?v=4"
                        alt="perfil"
                    />
                    <div>
                        <strong>KevenAndrade/API_NPS</strong>
                        <p>Its a NPS !! Did you ever recieve</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1230</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>78</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>55</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
        </>
    );
};

export default Repository;
