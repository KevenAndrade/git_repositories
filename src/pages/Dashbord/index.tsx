import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/github_logo.svg';

import { Title, Form, Repositories, Error } from './style';

interface Repositorio {
    full_name: string; // eslint-disable-line
    description: string;
    owner: {
        login: string;
        avatar_url: string; // eslint-disable-line
    };
}

const Dashbord: React.FC = () => {
    const [newRepo, setnewRrepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositorios, setrepositorios] = useState<Repositorio[]>([]);

    async function handleAddrepositorio(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositorio');
            return;
        }

        // consumi api
        try {
            const response = await api.get<Repositorio>(`repos/${newRepo}`);

            const repositorio = response.data;

            setrepositorios([...repositorios, repositorio]);
            setnewRrepo('');
            setInputError('');
        } catch (err) {
            setInputError('Repositorio não existe');
        }
    }

    return (
        <>
            <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
            <Title>Explore repositorios no GitHub</Title>

            <Form hasError={!!inputError} onSubmit={handleAddrepositorio}>
                <input
                    value={newRepo}
                    onChange={(e) => setnewRrepo(e.target.value)}
                    placeholder="Digite o nome do repositorio"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositorios.map((repos) => (
                    <a key={repos.full_name} href="teste">
                        <img
                            src={repos.owner.avatar_url}
                            alt={repos.owner.login}
                        />
                        <div>
                            <strong>{repos.full_name}</strong>
                            <p>{`${repos.description.substring(0, 55)} ...`}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashbord;
