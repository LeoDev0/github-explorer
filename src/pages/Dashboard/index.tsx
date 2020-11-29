import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60330828?s=460&u=cc32102f0ee41d53cdbb248f7d592e2312b331c2&v=4"
            alt="avatar"
          />
          <div>
            <strong>titulo do repo</strong>
            <p>descrição do repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60330828?s=460&u=cc32102f0ee41d53cdbb248f7d592e2312b331c2&v=4"
            alt="avatar"
          />
          <div>
            <strong>titulo do repo</strong>
            <p>descrição do repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60330828?s=460&u=cc32102f0ee41d53cdbb248f7d592e2312b331c2&v=4"
            alt="avatar"
          />
          <div>
            <strong>titulo do repo</strong>
            <p>descrição do repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
