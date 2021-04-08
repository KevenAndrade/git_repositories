import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/github_logo.svg';

import { Title, Form, Repositories } from './style';

const Dashbord: React.FC = () => {
    const [newRepo, setnewRrepo] = useState('');

    const [repositorios, setrepositorios] = useState([]);

    async function handleAddrepositorio(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // consumi api
        const response = await api.get(`repos/${newRepo}`);
        console.log(response.data);
    }

    return (
        <>
            <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
            <Title>Explore repositorios no GitHub</Title>

            <Form onSubmit={handleAddrepositorio}>
                <input
                    value={newRepo}
                    onChange={(e) => setnewRrepo(e.target.value)}
                    placeholder="Digite o nome do repositorio"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/65917547?v=4"
                        alt="Perfil"
                    />
                    <div>
                        <strong>KevenAndrade / API_NPS</strong>
                        <p> Its a NPS !! Did you ever recieve ...</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashbord;
