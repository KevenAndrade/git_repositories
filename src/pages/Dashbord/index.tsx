import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/github_logo.svg';

import { Title, Form, Repositories } from './style';

const Dashbord: React.FC = () => {
    const [newRepo, setnewRrepo] = useState('');

    const [repositorios, setrepositorios] = useState([]);

    function handleAddrepositorio() {
        // pega valor de campo
        // addiciona repositorios
        // consumi api
    }

    return (
        <>
            <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
            <Title>Explore repositorios no GitHub</Title>

            <Form>
                <input
                    value={newRepo}
                    onChange={(e) => setnewRrepo(newRepo)}
                    placeholder="Digite o nome do repositorio"
                />
                <button onClick={handleAddrepositorio} type="submit">
                    Pesquisar
                </button>
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
