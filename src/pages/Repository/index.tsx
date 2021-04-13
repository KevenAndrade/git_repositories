import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';
import logo from '../../assets/github_logo.svg';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repositorio {
    full_name: string; // eslint-disable-line
    description: string;
    stargazers_count: number; // eslint-disable-line
    forks_count: number; // eslint-disable-line
    open_issues_count: number; // eslint-disable-line
    owner: {
        login: string;
        avatar_url: string; // eslint-disable-line
    };
}

interface Issue {
    id: number;
    title: string;
    html_url: string; // eslint-disable-line
    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repositorio | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        // dados do repositorio
        api.get<Repositorio>(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        // issues do repositorio
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

        /*  async function loadData(): Promise<void> {
            const [repository, issues] = await Promise.all([
                api.get(`repos/${params.repository}`),
                api.get(`repos/${params.repository}/issues`),
            ]);
        }
        loadData(); */
    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong> {issue.title} </strong>
                            <p> {issue.user.login} </p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
