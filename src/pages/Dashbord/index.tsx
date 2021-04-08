import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github_logo.svg';
import { Title, Form, Repositories } from './style';

const Dashbord: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Gitfinder" style={{ width: 50 }} />
            <Title>Explore repositorios no GitHub</Title>

            <Form>
                <input placeholder="Digite o nome do repositorio" />
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
